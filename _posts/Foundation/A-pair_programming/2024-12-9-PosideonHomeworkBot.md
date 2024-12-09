---
layout: post
title: Posidon AI Homework Bot
description: The Ai Homework bot using Gemini Integration
permalink: /posts/posidon
comments: True
---

# Poseidon AI Homework Bot Feature

## Summary:
The Poseidon AI Homework Bot is an interactive feature that allows students to ask homework-related questions and receive accurate, AI-generated answers. It stores chat history for each user in the browser's local storage, creating a personalized experience for each student.

---

## Frontend Code
The following JavaScript code powers the frontend logic of the Poseidon AI Homework Bot:

```javascript
async function sendQuestion() {
    const question = document.getElementById("question").value;
    const chatBox = document.getElementById("chat-box");

    // Append user's question to the chat
    chatBox.innerHTML += `
        <div style="margin-bottom: 20px; background: rgba(232, 244, 255, 0.85); padding: 15px; border-radius: 8px;">
            <strong style="color: #0056b3;">You:</strong>
            <span style="color: #0056b3;">${question}</span>
        </div>`;
    saveChatsToLocalStorage({ role: "user", message: question });

    // Send question to backend
    const response = await fetch(`${pythonURI}/api/ai/help`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
    });

    // Append AI's response
    const data = await response.json();
    const aiResponse = data.response || "Error: Unable to fetch response.";
    chatBox.innerHTML += `
        <div style="margin-bottom: 20px; background: #0077be; padding: 15px; border-radius: 8px; color: white;">
            <strong>Poseidon:</strong> ${aiResponse}
        </div>`;
    saveChatsToLocalStorage({ role: "ai", message: aiResponse });

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById("question").value = ""; // Clear input field
}

// Save chat messages in local storage
function saveChatsToLocalStorage(chat) {
    const userId = "default_user"; // Replace with unique user ID if available
    const storedChats = localStorage.getItem(`chats_${userId}`);
    const chats = storedChats ? JSON.parse(storedChats) : [];
    chats.push(chat);
    localStorage.setItem(`chats_${userId}`, JSON.stringify(chats));
}

// Load chats from local storage on page load
window.onload = function () {
    const chatBox = document.getElementById("chat-box");
    const userId = "default_user"; // Replace with unique user ID if available
    const storedChats = localStorage.getItem(`chats_${userId}`);
    if (storedChats) {
        const chats = JSON.parse(storedChats);
        chats.forEach(chat => {
            chatBox.innerHTML += `
                <div style="margin-bottom: 20px; background: ${chat.role === 'user' ? 'rgba(232, 244, 255, 0.85)' : '#0077be'}; padding: 15px; border-radius: 8px; color: ${chat.role === 'user' ? '#0056b3' : 'white'};">
                    <strong>${chat.role === 'user' ? 'You' : 'Poseidon'}:</strong> ${chat.message}
                </div>`;
        });
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
    }
};


@app.route('/api/ai/help', methods=['POST'])
def ai_homework_help():
    data = request.get_json()
    question = data.get("question", "")
    if not question:
        return jsonify({"error": "No question provided."}), 400

    try:
        response = model.generate_content(
            f"Your name is Poseidon. You are a homework help AI chatbot. Answer the following question: {question}")
        return jsonify({"response": response.text}), 200
    except Exception as e:
        print("error!", e)
        return jsonify({"error": str(e)}), 500

{
    "chats": [
        { "role": "user", "message": "What is the Pythagorean theorem?" },
        { "role": "ai", "message": "The Pythagorean theorem states that a² + b² = c² in a right triangle." }
    ]
}
