---
layout: base
title: Binary Calculator
---

# Decimal to Binary Calculator

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decimal to Binary Calculator</title>
</head>
<body>


<h1>Decimal to Binary Calculator</h1>


<form>
    <label for="decimal1">First Decimal Number:</label>
    <input type="number" id="decimal1" name="decimal1" placeholder="Enter decimal number"><br><br>


    <label for="decimal2">Second Decimal Number:</label>
    <input type="number" id="decimal2" name="decimal2" placeholder="Enter decimal number"><br><br>


    <label for="operation">Operation:</label>
    <select id="operation" name="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
    </select><br><br>


    <button type="button" onclick="calculate()">Calculate</button>
</form>


<h2>Result (Binary): <span id="result"></span></h2>


<script>
    function calculate() {
        const decimal1 = parseInt(document.getElementById('decimal1').value);
        const decimal2 = parseInt(document.getElementById('decimal2').value);
        const operation = document.getElementById('operation').value;


        let result;


        if (operation === 'add') {
            result = decimal1 + decimal2;
        } else if (operation === 'subtract') {
            result = decimal1 - decimal2;
        }


        // Convert result to binary
        document.getElementById('result').textContent = result.toString(2);
    }
</script>


</body>
</html>
