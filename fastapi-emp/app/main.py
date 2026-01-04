from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.login import router as auth_router

app = FastAPI()

# Allow React dev server to talk to FastAPI
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    # add your production frontend URL here later
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # <- allow frontend origin
    allow_credentials=True,
    allow_methods=["*"],    # <- allow GET, POST, etc.
    allow_headers=["*"],    # <- allow headers
)

app.include_router(auth_router)