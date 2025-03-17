---
layout: base
title: home page
permalink: /home/
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Go Home Button</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #home {
            font-size: 24px;
            color: blue;
            cursor: pointer;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div id="home">Home</div>

    <script>
        // Add an event listener to the Home div
        document.getElementById('home').addEventListener('click', () => {
            window.location.href = 'https://amaljinan.github.io/Amal_2025/';
        });
    </script>
</body>
</html>
