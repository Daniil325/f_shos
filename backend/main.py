from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from backend.routers.router import router as test_router
from backend.db.Dictionary.models import Words
from backend.db.base import *
from sqlalchemy import select
from sqlalchemy.sql import exists
from backend.db.controller import *


app = FastAPI()

origins = [
    'http://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allow_headers=["Content-Type", "Set-Cookie", "Access-Control-Allow-Headers",
                   "Access-Control-Allow-Origin", "Authorization"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.get("/test/{word}")
async def kkkk(word: str):
    result = await Words.find_by_word(word)
    print(result)
    if result is None:
        return False
    else:
        return result


app.include_router(test_router)
