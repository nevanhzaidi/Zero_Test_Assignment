import pandas as pd
import numpy as np
import datetime
import traceback

def code_runner(code,df):
    """
    Executes given code on a DataFrame, expecting a result in 'mapped_df'.

    Args:
        code (str): Code referencing 'input_df' as the DataFrame.
        df (pd.DataFrame): Input DataFrame.

    Returns:
        pd.DataFrame: Processed DataFrame or None if an error occurs.
    """
    code = code.replace("\\n"," \n")
    namespace = {"input_df":df,"pd":pd,'mapped_df':None,"datetime":datetime,"np":np}
    try:
        exec(code, namespace)
        mapped_df = namespace['mapped_df']
        return mapped_df
    except Exception as e:
        print(f"Error executing code: {e}")
        tb = traceback.format_exc().split("\n")
        return(tb[2:])
