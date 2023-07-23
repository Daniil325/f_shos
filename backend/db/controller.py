from backend.db.Dictionary.models import Words
from backend.db.base import *
from sqlalchemy import select


async def check_word_exist(word: str):
    async with async_session_maker() as session:
        query = select(Words).where(Words.word == word.lower())
        result = await session.execute(query)
        return result.scalar_one_or_none()