from sqladmin import ModelView
from backend.db.Dictionary.models import Words
from backend.db.Map.models import Country


class WordsAdmin(ModelView, model=Words):
    column_list = [Words.id, Words.word]
    name = 'Слово'
    name_plural = 'Слова'


class CountryAdmin(ModelView, model=Country):
    column_list = [Country.id, Country.name, Country.capital, Country.president, Country.language, Country.currency]
    name = 'Страна'
    name_plural = 'Страны'
