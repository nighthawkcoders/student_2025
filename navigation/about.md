---
layout: page
title: About
permalink: /about/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
    <style>
        body {
            font-family: georgia, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }

        .section {
            margin-bottom: 40px;
        }

        .section h2 {
            color: #0056b3;
            margin-bottom: 10px;
        }

        .section img {
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .gallery {
            display: flex;
            overflow-x: auto;
            gap: 10px;
            padding: 10px 0;
        }

        .gallery-item {
            flex: 0 0 auto;
            width: 360px;
            height: 245px;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .cta {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
        }

        .cta button, .cta a button {
            background-color: white;
            border: 2px solid blue;
            color: blue;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s, color 0.3s;
        }

        .cta button:hover, .cta a button:hover {
            background-color: blue;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- About Me Sections -->
        <div class="section">
            <h2>I was born in Pakistan ☪</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="https://i.ebayimg.com/images/g/BssAAOSw0gFh1gWL/s-l1200.jpg" alt="Pakistan flag">
                </div>
            </div>
        </div>

        <div class="section">
            <h2>I lived in England for 7 years ☕️</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="https://i.ebayimg.com/images/g/6BMAAOSw4MZfkXh0/s-l400.jpg" alt="England flag">
                </div>
            </div>
        </div>

        <div class="section">
            <h2>I have been to 2 Coldplay concerts 🎤</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2023/06/24/rrcoldplay2406_2.jpg?VersionId=B_yFErVupWbUG1LvHXkXbceGHYyMhKgG" alt="Coldplay">
                </div>
            </div>
        </div>

        <div class="section">
            <h2>I have been on the Varsity golf team for 3 years 🏌️‍♀️</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jae6kqtiFw5WKwzGibvCssqwfun9l9wJOA&s" alt="Golf">
                </div>
            </div>
        </div>

        <div class="section">
            <h2>I play lacrosse 🥍</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="https://shop.guardiansports.com/cdn/shop/files/DSC04346.jpg?v=1725366284&width=1214" alt="Lacrosse">
                </div>
            </div>
        </div>

        <div class="section">
            <h2>I have been to 13 countries ✈️</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" alt="World">
                </div>
            </div>
        </div>

        <div class="section">
            <h2>I love Marvel 🍿</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimfpszmdlRxFKQxircof8_CRHWAVzlYPrJw&s" alt="Marvel">
                </div>
            </div>
        </div>

        <div class="section">
            <h2>I have a British Shorthair cat 🐈</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="https://cdn.pixabay.com/photo/2022/02/18/14/27/cat-7020822_1280.jpg" alt="Cat">
                </div>
            </div>
        </div>

        <!-- Call to Action Section -->
        <div class="cta">
            <p>Mysterious... Click This</p>
            <button>Button</button>
        </div>

        <!-- Favorite Songs Section -->
        <div class="cta">
            <p>Some of my favorite songs 🎧</p>
            <a href="https://www.youtube.com/watch?v=nYrEL9ecAWA">
                <button>Iris by the Goo Goo Dolls</button>
            </a>
            <a href="https://www.youtube.com/watch?v=m2gzAay1uD8">
                <button>Sure Thing by Miguel</button>
            </a>
        </div>
    </div>
</body>
</html>

