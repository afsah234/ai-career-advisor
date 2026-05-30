from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from rag import get_rag_chain
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

rag_chain = get_rag_chain()

class ChatRequest(BaseModel):
    message: str
    field: Optional[str] = None

@app.get("/")
def root():
    return {"status": "Career Advisor API Running!"}

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        question = request.message
        if request.field:
            question = f"Student ka field: {request.field}. Sawaal: {request.message}"

        
        answer = rag_chain.invoke(question)

        return {"answer": answer}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)