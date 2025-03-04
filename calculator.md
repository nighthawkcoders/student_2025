---
layout: page
title: Calculator
search_exclude: true
permalink: /calculator/
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        body {
            font-family: 'georgia', sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100vh;
        }

        .calculator-container {
            display: flex;
            justify-content: center;
        }

        .calculator {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
        }

        .calculator-display {
            font-size: 2rem;
            height: 60px;
            width: 100%;
            text-align: right;
            border: none;
            border-bottom: 2px solid #ddd;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #f8f8f8;
        }

        .calculator-buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .calculator-button {
            font-size: 1.5rem;
            padding: 15px;
            background-color: #A5BDDA;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .calculator-button:hover {
            background-color: #94ADC9;
        }

        .calculator-button:active {
            background-color: #537196;
        }

        .calculator-operator {
            background-color: #999ACF;
        }

        .calculator-operator:hover {
            background-color: #7D7EB7;
        }

        .calculator-operator:active {
            background-color: #5F60A0;
        }

        .calculator-clear {
            background-color: #E4B6D4;
        }

        .calculator-clear:hover {
            background-color: #DAA4C6;
        }

        .calculator-clear:active {
            background-color: #C98DB3;
        }

        .calculator-equal {
            grid-column: span 2;
        }
    </style>
</head>
<body>

    <div class="calculator-container">
        <div class="calculator">
            <input type="text" id="display" class="calculator-display" disabled>
            <div class="calculator-buttons">
                <button class="calculator-button" onclick="appendNumber('7')">7</button>
                <button class="calculator-button" onclick="appendNumber('8')">8</button>
                <button class="calculator-button" onclick="appendNumber('9')">9</button>
                <button class="calculator-button calculator-operator" onclick="appendOperator('/')">÷</button>

                <button class="calculator-button" onclick="appendNumber('4')">4</button>
                <button class="calculator-button" onclick="appendNumber('5')">5</button>
                <button class="calculator-button" onclick="appendNumber('6')">6</button>
                <button class="calculator-button calculator-operator" onclick="appendOperator('*')">×</button>

                <button class="calculator-button" onclick="appendNumber('1')">1</button>
                <button class="calculator-button" onclick="appendNumber('2')">2</button>
                <button class="calculator-button" onclick="appendNumber('3')">3</button>
                <button class="calculator-button calculator-operator" onclick="appendOperator('-')">-</button>

                <button class="calculator-button" onclick="appendNumber('0')">0</button>
                <button class="calculator-button" onclick="appendNumber('.')">.</button>
                <button class="calculator-button calculator-clear" onclick="clearDisplay()">C</button>
                <button class="calculator-button calculator-operator" onclick="appendOperator('+')">+</button>

                <button class="calculator-button calculator-equal" onclick="calculate()">=</button>
            </div>
        </div>
    </div>

    <script>
        function appendNumber(number) {
            document.getElementById('display').value += number;
        }

        function appendOperator(operator) {
            document.getElementById('display').value += operator;
        }

        function calculate() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }
    </script>

</body>
</html>