from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

if __name__ == "__main__":
    # Run the FastAPI app using Uvicorn on port 8000 (default)
    uvicorn.run(app, host="127.0.0.1", port=8000)