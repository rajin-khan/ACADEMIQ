from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from groq import Groq
import asyncio
from typing import AsyncGenerator

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

# Note: A response model is not needed for a StreamingResponse

# --- Groq API Client Setup ---
try:
    groq_client = Groq(api_key=os.environ.get("GROQ_API_KEY"))
except Exception as e:
    print(f"Error initializing Groq client: {e}")
    groq_client = None

# --- NEW Streaming Logic ---
async def stream_groq_response(message: str) -> AsyncGenerator[str, None]:
    """An async generator that streams responses from the Groq API."""
    if not groq_client:
        error_message = "Error: The AI service is not configured on the server. Please check the server logs."
        print(error_message)
        yield error_message
        return

    try:
        # Use stream=True to get a streaming response
        stream = groq_client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are DemiBot, a helpful and concise academic assistant for North South University. Your responses should be professional, accurate, and directly answer the user's questions about the university.",
                },
                {
                    "role": "user",
                    "content": message,
                }
            ],
            model="llama-3.3-70b-versatile", # Using a known valid, high-performance model
            stream=True,
        )
        # Yield each chunk of content as it arrives
        for chunk in stream:
            content = chunk.choices[0].delta.content
            if content:
                yield content
                await asyncio.sleep(0.01) # Small sleep to allow other tasks to run

    except Exception as e:
        print(f"Error during Groq API call: {e}")
        yield "Sorry, I'm having trouble connecting to my server right now. Please try again later."


# --- UPDATED API Endpoint for Streaming ---
@app.post("/chat")
async def handle_chat(request: ChatRequest):
    """
    Handles the chat request and streams back the response token by token.
    """
    return StreamingResponse(stream_groq_response(request.message), media_type="text/event-stream")