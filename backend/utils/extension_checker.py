from fastapi import UploadFile, HTTPException,File

def validate_file_extension(file: UploadFile = File(...)):
    if not file.filename.endswith('.csv'):
        raise HTTPException(status_code=400, detail="Invalid file type. Only .csv files are allowed.")
    return file
