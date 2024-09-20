
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
