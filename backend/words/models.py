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
