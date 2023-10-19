main_template = """
            Input Table Columns MetaData with Sample values:\n{info_input}\n\n
            Output Table Columns MetaData with Sample values:\n{info_template}\n\n
            Objective: Map the columns of the input table to the output table, considering the logical, linguistic, and contextual relationship between column names,values and sample values in both tables.\n\n
            Guidelines:\n
            1. For each column in the output table, suggest mapped column(s) from the input table having simailar values with output table.\n
            2. Provide a brief rationale (up to 4 words) for each mapping suggestions.\n
            3. Point out any changes or transformations required in the input table data to conform to the output table format.\n
            Finally share the working Python script that has a method name map_columns which can perform the suggested mappings and data transformations by extracting data from input dataframe and return pandas dataframe. also provide invoke statment of method and store results in variable named mapped_df.\n\n
                
            Give me Response in below formate:
                Sugguestions:
                Rationale:
                Code:
            """

revision_template = """
Input Table Columns MetaData with Sample values:\n{info_input}\n\n
Output Table Columns MetaData with Sample values:\n{info_template}\n\n
Objectives:
Provide a brief rationale (up to 4 words) for each mapping 
Use Columns names from (Mapped Columns:) for generating python script
{suggestion}

Finally share the working Python script that has a method name map_columns which can perform the mappings of (Mapped Columns) and data transformations  by  extracting data from input dataframe and return pandas dataframe. also provide invoke statment of method and store results in variable named mapped_df.\n\n


Response Format:
Mapped Colunms:(Columns Mapping)
Rationale:
Code:
    
"""



