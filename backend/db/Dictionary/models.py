from sqlalchemy import JSON, Column, Integer, String, insert
from backend.db.base import Base, async_session_maker
from sqlalchemy import select


class Words(Base):
    __tablename__ = "words"

    id = Column(Integer, primary_key=True)
    word = Column(String, nullable=False)  # слово
    definition = Column(String)  # определение
    examples = Column(JSON)  # примеры использования
    associations = Column(JSON)  # ассоциации
    synonyms = Column(JSON)  # синонимы
    image_link = Column(String, nullable=False)  # ссылка на изображение

    async def find_by_word(word: str):
        async with async_session_maker() as session:
            query = select(Words).where(Words.word == word.lower())
            result = await session.execute(query)
            return result.scalar_one_or_none()

    async def add_word(word: str, definition: str, examples, associations, synonyms, image_link):
        query = insert(Words).values(word=word, definition=definition, examples=examples, associations=associations,
                       synonyms=synonyms, image_link=image_link).returning(Words.id)
        async with async_session_maker() as session:
            result = await session.execute(query)
            await session.commit()
            return result.mappings().first()
