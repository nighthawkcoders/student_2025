---
layout: base
title: Amalś Github site
description: My index
author: Amal Jinan
image: /images/turtle.png
hide: false
---

<!-- Liquid: statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!-- Concatenation of site URL to frontmatter image -->
{% assign sprite_file = site.baseurl | append: page.image %}
<!-- Has is a list variable containing mario metadata for sprite -->
{% assign hash = site.data.mario_metadata %}  
<!-- Size width/height of Sprite images -->
{% assign pixels = 256 %}

<!-- Embedded Cascading Style Sheet (CSS) rules, define how HTML elements look -->

## Investing in Your Technical Futures

> CSSE 1,2 prepares students for the AP Computer Science pathway. This course focuses on teaching the JavaScript programming language, object-oriented programming and inheritance, and developing algorithmic thinking skills. Through game development projects, students will engage in engineering skills, learn fundamentals of programming, work with data structures, and foster collaboration skills with their peers. Tech talks will be conducted by teachers to introduce concepts, provide guidance on tools, and support ideas to establish development requirements. By performing development and exploration, this course aims to raise students' awareness of the tremendous capabilities of computers and software engineering skills across various fields.

#### Home page Hack
<a href="[url](https://raw.githubusercontent.com/AmalJinan/Amal_2025/refs/heads/main/navigation/blogs.md)">blogs hack</a>

> Here is my progress through game coding, click to see these online


<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
        <div style="background-color: #00FF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Snake Game
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.0
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg" style="text-decoration: none;">
        <div style="background-color: #FF8800; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.1
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg" style="text-decoration: none;">
        <div style="background-color: #FFFF00; color: green; padding: 10px 20px; border-radius: 5px; font-weight: medium;">
            Turtle v0.2
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg" style="text-decoration: none;">
        <div style="background-color: #880088; color: blue; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.3
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Turtle v0.0
        </div>
    </a>
</div>
</div>

<br>

### College Articulation

> Here is my preparation for college topics, click to review my blogs
 <div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/navigation/popcornhack.ipynb" style="text-decoration: none;">
        <div style="background-color: #000000; color: orange; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Loops Hack
        </div>
    </a>
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/_notebooks/Sprint 2/Classes_and_Methods/2024-11-04-classes-hw.ipynb" style="text-decoration: none;">
        <div style="background-color: #000000; color: orange; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Classes
        </div>
    </a>
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/variables" style="text-decoration: none;">
        <div style="background-color: #000000; color: orangle; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Variables I/O
        </div>
    </a>
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/data-types/" style="text-decoration: none;">
        <div style="background-color: #000000; color: red; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Data Types
        </div>
    </a>
</div>
<div class="button-container">
    <a href="{{site.baseurl}}/_notebooks/Sprint 2/Nested_Conditionals" class="glow-button-blue-purple">
        Nested Condtiionals
        <span class="glow-effect"></span>
    </a>
    <a href="{{site.baseurl}}/_notebooks/Foundation/sprint 2/fundamentals/Mathematic_Expressions/2024-10-31-operators.ipynb" class="glow-button-blue-purple">
        Math expressions
        <span class="glow-effect"></span>
    </a>
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/for-loops/" class="glow-button-blue-purple">
        Loops and sprites
        <span class="glow-effect"></span>
    </a>
    <a href="{{site.baseurl}}/javascript/2024/09/15/javascript_output_objects_IPYNB_2_.html" class="glow-button-blue-purple">
        JavaScript output
        <span class="glow-effect"></span>
    </a>
</div>

<br>
<script src="https://utteranc.es/client.js"
        repo="AmalJinan/Amal_2025"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous" async>
</script>
