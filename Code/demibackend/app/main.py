from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from groq import Groq

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

# --- CORS Middleware ---
# Allows your React frontend (on localhost:5173) to talk to this backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models for Data Validation ---
class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

# --- Groq API Client Setup ---
try:
    groq_client = Groq(api_key=os.environ.get("GROQ_API_KEY"))
except Exception as e:
    print(f"Error initializing Groq client: {e}")
    groq_client = None

# --- API Endpoint ---
@app.post("/chat", response_model=ChatResponse)
async def handle_chat(request: ChatRequest):
    if not groq_client:
        raise HTTPException(status_code=500, detail="Groq client not initialized. Check API key.")

    try:
        chat_completion = groq_client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are DemiBot, a helpful and concise academic assistant for North South University. Your responses should be professional, accurate, and directly answer the user's questions about the university."
                },
                {
                    "role": "user",
                    "content": request.message,
                }
            ],
            model="llama-3.3-70b-versatile",
        )
        
        bot_response = chat_completion.choices[0].message.content
        return ChatResponse(response=bot_response)

    except Exception as e:
        print(f"Error during Groq API call: {e}")
        raise HTTPException(status_code=500, detail="Failed to get a response from the AI model.")