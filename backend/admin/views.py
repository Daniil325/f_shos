from sqladmin import ModelView
from backend.words.models import Words



class WordsAdmin(ModelView, model=Words):
    column_list = [Words.id, Words.word]
    name = 'Слово'
    name_plural = 'Слова'


