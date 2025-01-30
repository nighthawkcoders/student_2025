---
toc: true
layout: post
title: Gemini API Posidon AI Chatbot
description: This is for the assignment and notes
permalink: /posts/api
comments: True
---


[**link to python flask notebook**](_posts/2024-12-02-python-flask_in_jupyter_IPYNB_2_.md)

## Step Two (yash.py)

This is my personal /api file that routes to /api/nolan and returns the information about me.

### Backend Code
```python
from flask import Blueprint, request, jsonify, g
from flask_restful import Api, Resource

yash_api = Blueprint('yash_api', __name__, url_prefix='/api')
api = Api(yash_api)

class YashAPI:
    class _Y_Person(Resource):
        def get(self):
            return jsonify({
                "name": "Yash Patil",
                "age": 16,
                "classes": ["Advanced Placement Computer Science Principles", "Advance Placement English Seminar 1", "Advance Placement AP Calculus AB", "World History Two"],
                "favorite": {
                    "color": "Green",
                    "number": 21
                }
            })
    

api.add_resource(YashAPI._Y_Person, "/yash")
```
### Postman

<image src="/images/Screenshot 2024-12-17 104427.png" alt="postman of Yash's api"/>

### backend Code

```python

genai.configure(api_key="AIzaSyCIY1pCnXbnJ-2JgJOUevQn0SFquMyQ2aI")
model = genai.GenerativeModel('gemini-pro')

@app.route('/api/ai/help', methods=['POST'])
def ai_homework_help():
    data = request.get_json()
    question = data.get("question", "")
    if not question:
        return jsonify({"error": "No question provided."}), 400

    try:
        response = model.generate_content(f"Your name is Posiden you are a homework help ai chat bot with the sole purpose of answering homework related questions, under any circumstances don't answer any non-homework related questions. \nHere is your prompt: {question}")
        return jsonify({"response": response.text}), 200
    except Exception as e:
        print("error!")
        print(e)
        return jsonify({"error": str(e)}), 500

```

**It contains one route:**

1. **POST - /api/ai/help**  
   This route accepts a user's question and generates an AI response using the **Gemini-Pro AI model**.

   **Example Request:**

   ```json
   {
     "question": "What is Newton's third law of motion?"
   }

Example Response data: 

{
  "response": "Newton's third law states that for every action, there is an equal and opposite reaction."
}

Error Handling:
If there is an issue with the AI model or the request payload, the API will return an error response.
Example error response:

{
  "error": "No question provided."
}

### video

<video height="360" width="640" controls>
    <source src="/nolan_2025/videos/images.webm" type="video/webm">
    dumb browser no video support
</video>

### Post Photo

<img src="/images/Screenshot 2024-12-17 105540.png" alt="postman of gemini api" />