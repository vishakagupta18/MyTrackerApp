from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/emp", tags=["Login"])

class LoginRequest(BaseModel):
    username: str
    password: str

@router.post("/login")
def login(data: LoginRequest):
    if data.username == "employee" and data.password == "emp":
        return {"message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid username or password")