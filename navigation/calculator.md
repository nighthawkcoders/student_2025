---
layout: base
title: calculator
permalink: /calculator/
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }

        #calculator {
            display: grid;
            grid-template-columns: repeat(4, 80px);
            grid-gap: 10px;
            background-color: #333;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        }

        #display {
            grid-column: span 4;
            background-color: #fff;
            text-align: right;
            padding: 15px;
            font-size: 24px;
            border-radius: 5px;
            box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.2);
        }

        button {
            width: 80px;
            height: 80px;
            font-size: 24px;
            border: none;
            border-radius: 5px;
            background-color: #666;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:active {
            background-color: #444;
        }

        .operator {
            background-color: #ff9500;
        }

        .operator:active {
            background-color: #cc7a00;
        }

        .equals {
            background-color: #33cc33;
            grid-column: span 2;
        }

        .equals:active {
            background-color: #28a428;
        }

        .clear {
            background-color: #ff3b30;
            grid-column: span 2;
        }

        .clear:active {
            background-color: #cc2f24;
        }
    </style>
</head>
<body>
    <div id="calculator">
        <div id="display">0</div>
        <button class="clear" id="clear">C</button>
        <button class="operator" id="divide">/</button>
        <button class="operator" id="multiply">*</button>

        <button id="7">7</button>
        <button id="8">8</button>
        <button id="9">9</button>
        <button class="operator" id="subtract">-</button>

        <button id="4">4</button>
        <button id="5">5</button>
        <button id="6">6</button>
        <button class="operator" id="add">+</button>

        <button id="1">1</button>
        <button id="2">2</button>
        <button id="3">3</button>
        
        <button class="equals" id="equals">=</button>
        <button id="0">0</button>

        <!-- Advanced functions -->
        <button class="operator" id="exp">^</button>
        <button class="operator" id="sqrt">√</button>
        <button class="operator" id="sin">sin</button>
        <button class="operator" id="cos">cos</button>
        <button class="operator" id="tan">tan</button>
    </div>

    <script type="module">
        // Get display element
        const display = document.getElementById('display');

        // Variable to store current value and operator
        let currentValue = '';
        let operator = '';
        let previousValue = '';

        // Function to update the display
        function updateDisplay(value) {
            display.textContent = value;
        }

        // Handle number buttons click
        const numberButtons = document.querySelectorAll('button:not(.operator):not(.equals):not(.clear)');
        numberButtons.forEach(button => {
            button.addEventListener('click', () => {
                const number = button.id;
                if (display.textContent === '0' || operator === '=') {
                    currentValue = number;
                    operator = '';  // Reset after equals
                } else {
                    currentValue += number;
                }
                updateDisplay(currentValue);
            });
        });

        // Handle operator buttons click
        const operatorButtons = document.querySelectorAll('.operator:not(#exp):not(#sqrt):not(#sin):not(#cos):not(#tan)');
        operatorButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (currentValue !== '') {
                    previousValue = currentValue;
                    operator = button.id;
                    currentValue = '';
                }
            });
        });

        // Handle advanced functions: exponent, sqrt, sin, cos, tan
        document.getElementById('exp').addEventListener('click', () => {
            if (currentValue !== '') {
                previousValue = currentValue;
                operator = '^';
                currentValue = '';
            }
        });

        document.getElementById('sqrt').addEventListener('click', () => {
            if (currentValue !== '') {
                currentValue = Math.sqrt(parseFloat(currentValue)).toString();
                updateDisplay(currentValue);
            }
        });

        document.getElementById('sin').addEventListener('click', () => {
            if (currentValue !== '') {
                currentValue = Math.sin(parseFloat(currentValue) * Math.PI / 180).toString();
                updateDisplay(currentValue);
            }
        });

        document.getElementById('cos').addEventListener('click', () => {
            if (currentValue !== '') {
                currentValue = Math.cos(parseFloat(currentValue) * Math.PI / 180).toString();
                updateDisplay(currentValue);
            }
        });

        document.getElementById('tan').addEventListener('click', () => {
            if (currentValue !== '') {
                currentValue = Math.tan(parseFloat(currentValue) * Math.PI / 180).toString();
                updateDisplay(currentValue);
            }
        });

        // Handle equals button click
        document.getElementById('equals').addEventListener('click', () => {
            if (previousValue && currentValue && operator) {
                let result;
                switch (operator) {
                    case 'add':
                        result = parseFloat(previousValue) + parseFloat(currentValue);
                        break;
                    case 'subtract':
                        result = parseFloat(previousValue) - parseFloat(currentValue);
                        break;
                    case 'multiply':
                        result = parseFloat(previousValue) * parseFloat(currentValue);
                        break;
                    case 'divide':
                        result = parseFloat(previousValue) / parseFloat(currentValue);
                        break;
                    case '^':
                        result = Math.pow(parseFloat(previousValue), parseFloat(currentValue));
                        break;
                }
                updateDisplay(result);
                previousValue = result;
                currentValue = '';
                operator = '=';
            }
        });

        // Handle clear button click
        document.getElementById('clear').addEventListener('click', () => {
            currentValue = '';
            previousValue = '';
            operator = '';
            updateDisplay(0);
        });
    </script>
</body>
</html>
