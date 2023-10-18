from fastapi import FastAPI, UploadFile, HTTPException,File,Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from starlette.responses import JSONResponse
import io
import pandas as pd
from utils import (ColumnMapper,
                    main_template,
                    revision_template,
                    code_runner,
                    clean_suggestion,
                    )

app = FastAPI()

# Enabling CORS if required
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

mapper = ColumnMapper()  # Create instance of ColumnMapper


@app.post("/suggest_column_mapping/")
async def column_suggestions(input_table: UploadFile = File(...),
                             template_table: UploadFile = File(...),
                             suggestion: str  = Form(None)
                             ):
        
    """
    Generate column mapping suggestions between two CSVs using OpenAI's LLM.
    
    Args:
        input_table (UploadFile): CSV file containing main data.
        template_table (UploadFile): CSV file representing the desired column structure.
        suggestion (str, optional): Prior suggestion for refining the recommendation.
    
    Returns:
        JSONResponse: Column mapping suggestions and potential code.
    """
    try:
        if not (input_table.filename.endswith('.csv') and template_table.filename.endswith('.csv')):
            raise Exception("Invalid file Type. Only .csv files are allowed.")
        
        # Read the uploaded files into pandas dataframes
        df_a = pd.read_csv(io.StringIO(input_table.file.read().decode("utf-8")))
        df_b = pd.read_csv(io.StringIO(template_table.file.read().decode("utf-8")))

        # Get column info for each dataframe
        info_a = mapper.get_column_info(df_a)
        info_b = mapper.get_column_info(df_b)

        # Get the column mapping suggestions
        if suggestion:
            suggestion = clean_suggestion(suggestion)

            response = mapper.suggest_column_mapping(info_a, info_b, revision_template,suggestion)
        else:
            response = mapper.suggest_column_mapping(info_a, info_b, main_template)


        return JSONResponse(content=response, status_code=200)

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    

@app.post("/column_mapper/")
async def column_mapper(code: str= Form(...),input_table: UploadFile = File(...)):
    """
    Apply user-defined code on a provided CSV to perform data manipulations.
    
    Args:
        code (str): Python code to execute on the CSV.
        input_table (UploadFile): CSV file containing the data.
    
    Returns:
        JSONResponse: Processed data in record format after executing the code.
    """
    try:

        if not input_table.filename.endswith('.csv'):
            raise Exception("Invalid file Type. Only .csv files are allowed.")
        
        # Read the uploaded files into pandas dataframes
        df_a = pd.read_csv(io.StringIO(input_table.file.read().decode("utf-8")))
        response = code_runner(code,df_a)
        # pdb.set_trace()
        if isinstance(response, pd.DataFrame):
            response = response.to_dict(orient='records')
        return JSONResponse(content=response,status_code=200)
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))



if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
