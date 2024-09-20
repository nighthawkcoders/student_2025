
layout: post
title: About Me
permalink: /about/
---

{% include nav/home.html %}

<style>
    body {
        font-family: sans-serif;
    }
    /* Container for Flexbox-based layout */
    .flex-container {
        display: flex;
        justify-content: center; /* Center items horizontally */
        flex-wrap: wrap; /* Allow wrapping of items */
        gap: 25px; /* Add space between items */
        margin-top: 20px;
    }
    .flex-item {
        text-align: center;
        flex-basis: calc(25% - 20px); /* Make items take up 25% of the container width */
    }
    .flex-item img {
        width: 100%;
        height: 150px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .flex-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }

    .achievements-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    .footer {
        text-align: center;
        padding: 20px;
        background-color: #f1f1f1;
        border-top: 1px solid #24292e;
        margin-top: 20px;
        width: 100%;
        background-color: #121212;
    }

    .footer a {
        margin: 0 10px;
        text-decoration: none;
        background-color: #121212;
    }

    .footer img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: transform 0.3s ease;
    }

    .footer img:hover {
        transform: scale(1.1);
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>
Markdown samples   (https://www.markdownguide.org/getting-started/)
using markdwon from index.md we are learning markdwon
This text below is Markdown 

``` markdown 
## Investing in Your Technical Futures

> CSSE 1,2 prepares students for t
he AP Computer Science pathway. This course focuses on teaching the JavaScript programming language, object-oriented programming and inheritance, and developing algorithmic thinking skills. Through game development projects, students will engage in engineering skills, learn fundamentals of programming, work with data structures, and foster collaboration skills with their peers. Tech talks will be conducted by teachers to introduce concepts, provide guidance on tools, and support ideas to establish development requirements. By performing development and exploration, this course aims to raise students' awareness of the tremendous capabilities of computers and software engineering skills across various fields. ok great

``` markdown 

This text below is my About me 

## -About Me CSSE 

> Class of 2028
``` markdown 

## About me Amal Jinan Class of 2028
Lived in
## San Diego
## Silicon Valley
## Canada
## Has attended about 6 different schools 1 sibling
## Hobbies:
## Soccer
## Reading
## Videogaming

``` markdown
![image](https://github.com/user-attachments/assets/8e7e0410-0850-4c60-ad49-dcbdbdcdb64e)
![image](https://github.com/user-attachments/assets/fe63f52c-9044-4e0d-ba56-3dd01eb2e307)
![image](https://github.com/user-attachments/assets/04037765-8b57-449f-91bf-08ca64c67c22)
