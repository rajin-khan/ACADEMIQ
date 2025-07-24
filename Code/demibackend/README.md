# DemiBot Backend

This is the backend server for the DemiBot application. It's built with Python and FastAPI and is responsible for handling chat requests from the frontend, communicating with the Groq API to get AI-generated responses, and streaming those responses back to the client.

### Prerequisites

*   Python 3.9+ (Python 3.11 is recommended)
*   An environment manager:
    *   Python's built-in `venv` and `pip`.
    *   OR [Conda](https://docs.conda.io/en/latest/miniconda.html) (Miniconda is recommended).

---

### Setup and Installation

1.  **Navigate to the Backend Directory**

    Open your terminal and change into the backend directory:
    ```bash
    cd /path/to/your/project/Code/demibackend
    ```

2.  **Create and Activate a Python Environment**

    Choose **one** of the following options (A or B) to create an isolated environment for the project. This prevents dependency conflicts with other projects.

    ---
    #### **Option A: Using `venv` (Standard Python)**

    This method uses Python's built-in tools.

    *   **On macOS/Linux:**
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```

    *   **On Windows:**
        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```
    After activation, you should see `(venv)` at the beginning of your terminal prompt.

    ---
    #### **Option B: Using `conda`**

    If you prefer using Conda to manage your environments:

    *   **Create a new environment** (we'll name it `demibackend` and use Python 3.11):
        ```bash
        conda create --name demibackend python=3.11
        ```
        Type `y` and press Enter when prompted.

    *   **Activate the new environment:**
        ```bash
        conda activate demibackend
        ```
    After activation, you should see `(demibackend)` at the beginning of your terminal prompt.

    ---

3.  **Install Dependencies**

    With your chosen environment (`venv` or `conda`) activated, install all required Python packages using `pip`.
    ```bash
    pip install -r requirements.txt
    ```
    *(Note: It is best practice to use `pip` inside a conda environment for installing packages from a `requirements.txt` file.)*

4.  **Set Up Environment Variables**

    The application requires an API key to connect to the Groq service.

    *   Create a file named `.env` in the root of the `demibackend` directory (i.e., at `/Code/demibackend/.env`).
    *   Add your Groq API key to this file. You can get a free key from the [Groq Console](https://console.groq.com/keys).

    Your `.env` file should contain the following line:
    ```
    GROQ_API_KEY="YOUR_API_KEY_HERE"
    ```
    **Important:** Replace `"YOUR_API_KEY_HERE"` with your actual key. Do not commit the `.env` file to version control.

### Running the Server

1.  **Start the FastAPI Server**

    From the `demibackend` directory (with your `venv` or `conda` environment still active), run the following command:
    ```bash
    uvicorn app.main:app --reload
    ```
    *   `app.main:app`: This tells Uvicorn to look for the `app` object in the `app/main.py` file.
    *   `--reload`: This enables hot-reloading, so the server will automatically restart when you save changes to the code.

2.  **Verify It's Running**

    The server will start and listen on `http://127.0.0.1:8000`. You can verify that it is running by opening the interactive API documentation in your browser at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

The backend is now ready to receive requests from the frontend.