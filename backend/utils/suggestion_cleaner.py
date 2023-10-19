

def clean_suggestion(suggestion: str):
        
    """
    Cleans and extracts the main content from the suggestion string.

    Args:
        suggestion (str): Input string containing potential code and rationale.

    Returns:
        str: Cleaned suggestion without the "Rationale:" part.
    """
    try:
        suggestion= suggestion.replace("\\n","\n")
        code_index = suggestion.find("Rationale:")
        return suggestion if code_index == -1 else suggestion[:code_index]
    except Exception as e:
        print(f"Error cleaning suggestion: {e}")
        return suggestion
    
