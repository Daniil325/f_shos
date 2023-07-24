# coding=utf-8
import json
from bs4 import BeautifulSoup
import requests
from fastapi import APIRouter, Query
import pymorphy2
from backend.db.Dictionary.models import Words
from backend.db.base import async_session_maker

router = APIRouter(
    tags=['Word']
)

headers = {'User-Agent':
               "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
           }


@router.get("/word/{word}")
async def get_word(
        word: str,
):
    resp_word = await Words.find_by_word(word)

    if resp_word is None:
        morph = pymorphy2.MorphAnalyzer(lang='ru')
        sklon_word = morph.parse(word)[0]
        nomn_word = sklon_word.inflect({'nomn'})
        sklon = [
            nomn_word.word,
            nomn_word.inflect({'gent'}).word,
            nomn_word.inflect({'datv'}).word,
            nomn_word.inflect({'accs'}).word,
            nomn_word.inflect({'ablt'}).word,
            nomn_word.inflect({'loct'}).word,
        ]
        word_value = await pars_word_value(word)
        associations = word_value['associations']
        definition = word_value['definition']
        examples = word_value['examples']
        synonyms = word_value['synonyms']
        image = await pars_image(word)
        resp = {
            'associations': associations,
            'definition': definition,
            'examples': examples,
            'synonyms': synonyms,
            'image_link': image
        }
        await Words.add_word(word, definition, examples, associations, synonyms, image)
        return resp

    else:
        return resp_word


async def pars_image(word):
    res = requests.get(
        'https://xn--80ajubim2a.xn--p1acf/%D1%81%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/' + word,
        headers=headers
    )
    soup = BeautifulSoup(res.text, 'lxml')
    res = soup.find_all('script')
    data = json.loads(res[14].next)

    image = data['@graph'][3]['image'][0]
    return image


async def pars_word_value(word):
    res = requests.get(
        'https://kartaslov.ru/%D0%BA%D0%B0%D0%BA%D0%BE%D0%B9-%D0%B1%D1%8B%D0%B2%D0%B0%D0%B5%D1%82/' + word,
        headers=headers
    )
    soup = BeautifulSoup(res.text, 'lxml')
    site_data = soup.find_all('div', class_='v3-cross-block')

    associations = site_data[1].find_all('div', class_='v3-cross-block-list-item')
    synonyms = site_data[2].find_all('div', class_='v3-cross-block-list-item')

    word_value = site_data[5].find('li').find('p', class_="v3-map-dict-item").text

    examples = site_data[3].find('ul').find_all('li')
    result_examples = []
    for i in range(len(examples) - 1):
        temp = examples[i].text.replace('  ', '').split('\n')
        result_examples.append(list(filter(None, temp))[0])

    associations_result = [associations[i].find("a").text for i in range(len(associations))]
    synonyms_result = [synonyms[i].find("a").text for i in range(len(synonyms))]

    return {
        "associations": associations_result,
        "definition": word_value,
        "examples": result_examples,
        "synonyms": synonyms_result,
    }
