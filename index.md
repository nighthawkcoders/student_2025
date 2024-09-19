---
layout: base
title: Home
description: Home Page
hide: true
---


</table>

<table>
  <tr>
    <td><a href="{{site.baseurl}}/javascript/">Notebook Javascript</a></td>
  </tr>

</table>    

## Submenu
<div style="display: flex; justify-content: center; gap: 20px; padding: 20px;">
  <div style="text-align: center;">
     <a href="navigation/notebook1.html" style="text-decoration: none;">
        <button style="background-color: Blue; color: white; border: none; padding: 15px 30px; font-size: 16px; border-radius: 8px; cursor: pointer;">
           Notebook 1 Js Shell
        </button>
     </a>
  </div>

  <div style="text-align: center;">
     <a href="navigation/notebook2.html" style="text-decoration: none;">
        <button style="background-color: Orange; color: white; border: none; padding: 15px 30px; font-size: 16px; border-radius: 8px; cursor: pointer;">
           Notebook 2 Messi Vs Ronaldo
        </button>
     </a>
  </div>

  <div style="text-align: center;">
     <a href="navigation/notebook3.html" style="text-decoration: none;">
        <button style="background-color: Purple; color: white; border: none; padding: 15px 30px; font-size: 16px; border-radius: 8px; cursor: pointer;">
           Notebook 3 Text to Binary
        </button>
     </a>
  </div>
</div>
## Gaming Submenu

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    min-width: 160px;
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 5px;
    margin: 5px;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropdown-button {
    background-color: #3e8e41;
  }
</style>

<div class="dropdown">
  <button class="dropdown-button" style="background-color: #4CAF50; color: white; padding: 16px; font-size: 16px; border: none; cursor: pointer; border-radius: 8px;">
    Gaming Submenu
  </button>
  <div class="dropdown-content">
    <a href="navigation/gamingnotebook1.html" style="background-color: Blue; color: white;">Cookie Clicker</a>
    <a href="navigation/gamingnotebook2.html" style="background-color: Red; color: white;">Binary Calculator</a>
    <a href="navigation/gamingnotebook3.html" style="background-color: Teal; color: white;">Snake Game</a>
  </div>
</div>




<div style="padding-top: 50px;">
  <p>This is a button</p>
  <button>Button</button>

  <div style="padding-top: 33px;">
    <a href="./navigation/liverpool.html" style="display: inline-block; padding: 10px 60px; background-color: red; color: black; text-decoration: underline; border-radius: 5px;">Liverpool FC</a>
  </div>

  <div style="padding-top: 6px;">
    <a href="./navigation/journey.md" style="display: inline-block; padding: 10px 50px; background-color: black; color: white; text-decoration: underline; border-radius: 5px;">Journey</a>
  </div>

  <p>Click on these to see my Liverpool FC and Journey pages</p>
</div>

<!-- Mario Walking GIF -->
<img src="https://media.giphy.com/media/12QMzVeF4QsqTC/giphy.gif" alt="Mario walking" class="mario">

<style>
  .mario {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    animation: walk 10s linear infinite;
  }

  @keyframes walk {
    from { transform: translateX(-100px); }
    to { transform: translateX(100vw); }
  }
</style>

<!-- Utterances Comment Integration -->
<script src="https://utteranc.es/client.js"
        repo="Mom5MoreMins/aranya_student_2025"
        issue-term="pathname"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
