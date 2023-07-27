from pydantic import BaseModel


class WordSchema(BaseModel):
	id: int
	word: str
	definition: str
	examples: 