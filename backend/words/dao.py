from backend.services.base import BaseDAO
from backend.words.models import Words


class WordDAO(BaseDAO):
    model = Words
