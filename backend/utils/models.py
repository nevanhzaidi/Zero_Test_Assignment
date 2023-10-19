from sqlalchemy import Integer, Column, String, Sequence
from .database import Base,SessionLocal,engine



class LlmData(Base):
    __tablename__ = "llm_data"

    id = Column(Integer, Sequence('llm_data_id_seq'), primary_key=True)
    prompt = Column(String, index=True)
    response = Column(String, index=True)

Base.metadata.create_all(bind=engine)




def create_llm_data(prompt: str, response: str) -> LlmData:
    """
    Create and save an instance of LlmData in the database.

    Parameters:
    - db: An active SQLAlchemy session
    - prompt: The prompt string
    - response: The response string

    Returns:
    - LlmData instance
    """
    db=SessionLocal()
    llm_data_instance = LlmData(prompt=prompt, response=response)
    db.add(llm_data_instance)
    db.commit()
    db.refresh(llm_data_instance)