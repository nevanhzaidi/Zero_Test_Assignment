from pydantic import BaseModel
from typing import Optional

class ColumnMappingRequest(BaseModel):
    input_table: UploadFile
    template_table: UploadFile
    suggestion: Optional[str] = None

    