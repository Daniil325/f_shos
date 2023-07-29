from fastapi import APIRouter
from backend.words.dao import WordDAO
from backend.words.schemas import WordSchema

router = APIRouter(
    prefix='/words',
    tags=['Words']
)


@router.get('/{word}')
async def get_word(word: str) -> WordSchema:
    return await WordDAO.find_one_or_none(word=word.lower())

