---
layout: base
title: Text to Binary
---

---
layout: base
title: Text to Binary
---

# Text to Binary Converter

Welcome to the Text to Binary Converter page! Here you can convert text into binary code using a simple program. Below is the JavaScript code that performs this conversion.

## JavaScript Code
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text to Binary Converter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .container {
            text-align: center;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        input, button {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
        }
        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Text to Binary Converter</h1>
    <input type="text" id="textInput" placeholder="Enter text here" />
    <button onclick="convertToBinary()">Convert</button>
    <p id="result"></p>
</div>

<script>
    function convertToBinary() {
        const text = document.getElementById('textInput').value;
        let binaryString = '';

        for (let i = 0; i < text.length; i++) {
            let binary = text.charCodeAt(i).toString(2);
            binaryString += '0'.repeat(8 - binary.length) + binary + ' ';
        }

        document.getElementById('result').innerText = binaryString.trim();
    }
</script>

</body>
</html>
