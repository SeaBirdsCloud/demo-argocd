from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI(title="Quotes API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

quotes = [
    {"author": "Albert Einstein", "text": "A imaginação é mais importante que o conhecimento."},
    {"author": "Isaac Newton", "text": "Se vi mais longe, foi por estar sobre ombros de gigantes."},
    {"author": "Marie Curie", "text": "Nada na vida deve ser temido, apenas compreendido."},
    {"author": "Nikola Tesla", "text": "O futuro mostrará os resultados e julgará cada um conforme o seu trabalho."},
]

@app.get("/")
def root():
    return {"message": "Quotes API running 🚀"}

@app.get("/quote")
def get_quote():
    return random.choice(quotes)
