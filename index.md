---
layout: base
title: Home
description: Home Page
hide: true
---

# Yash's Page

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

<div style="padding-top: 50px;">
  <p>This is a button</p>
  <button>Button</button>

  <div style="padding-top: 33px;">
    <a href="./navigation/liverpool.html" style="display: inline-block; padding: 10px 60px; background-color: red; color: black; text-decoration: underline; border-radius: 5px;">Liverpool FC</a>
  </div>

  <div style="padding-top: 6px;">
    <a href="http://127.0.0.1:4100/student_2025/navigation/journey.html" style="display: inline-block; padding: 10px 50px; background-color: black; color: white; text-decoration: underline; border-radius: 5px;">Journey</a>
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
