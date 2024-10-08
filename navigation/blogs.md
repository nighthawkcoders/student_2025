---
layout: base
title: Blogs/Hack
description: Blogs
author: Amal Jinan
hide: false
---

<!DOCTYPE html>
<html>
<body>
 <audio id="myAudio">
  <source src="https://www.sousound.com/music/jingle/jingle_02.mp3" type="audio/mpeg">
</audio>

<p>Click the button to play and pause the audio.</p>

<button onclick="playAudio()" type="button">Play </button>
<button onclick="pauseAudio()" type="button">Pause </button> 

<script>
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 
</script>
<h1> ESSENTIALS OF DEVELOPMENT TOOLS </h1>
<h2> ACTIVATE TOOLS SETUP TUTORIAL </h2>
<p> 
Understanding and utilizing the right development tools is crucial for a successful coding journey. This section highlights the core components and additional tools that will enhance your learning experience and collaboration.<br> <br>

Laptop Requirement: Ensure you have a laptop with development tools installed. MacOS and Windows are preferred. Chromebooks are supported by using a KASM cloud workspace.<br>
Version Control: GitHub will store your coding projects and serve as a collaboration hub with others.<br>
Code Editor: This course will use Visual Studio Code for its extensive support for programming languages and helpful coding features.
Interactive Coding: In this course, coding will be interactive and instantaneous. Visual Studio Code, with support for Jupyter Notebooks and GitHub Pages, is ideal for coding, data analysis, capturing notes, and creating documentation.<br>
Web Hosting: Throughout this course, students and teachers will publish their projects and notes using GitHub pages. Students will showcase their projects and chronicle their development journey.<br>

 <h3>Install Developer Tools</h3>  
cd<br>
mkdir nighthawk <br>
cd nighthawk <br>
git clone https://github.com/nighthawkcoders/portfolio_2025.git <br>
cd <br>
make a clone of your student repository <br>
# move to project directory <br>
cd student_2025 <br>

<h4> # make virtual environment by script</h4> 
scripts/venv.sh <br>

<h4> # activate virtual environment, observe prompt change after running it</h4> 
source venv/bin/activate 

<h4> # install python packages for project </h4>
pip install -r requirements.txt <br>

<h4> # show Kernels, python3 needs must be in the list</h4>
jupyter kernelspec list <br>

<h4> # install gems (Ruby packages), required for Jekyll requirements in GitHub Pages</h4>
bundle install <br>

<h4> # open VSCode </h4>
type code .<br>
<h4> #  Most tools have been pre-installed. Run shell command to automatically finish tool setup.</h4>

cd <br>
cd nighthawk/portfolio_2025/scripts <br>

./activate.sh <br>

<h3>Git identification</h3> 

  Setup personal GitHub variables: Change youremail@gmail.com and yourGHID to match your credentials. This is required prior to syncing code to GitHub. These configurations ensure that your commits are associated with your GitHub account, which is important for tracking contributions and collaboration. <br>

Set your email address: This email should be the same one associated with your GitHub account. <br>

git config --global user.email youremail@gmail.com <br>

Set your GitHub user.name: This should be your GitHub ID. <br>

git config --global user.name yourGHID <br>

After running these commands, you can verify the configurations by running: <br>

git config --global --list<br>
</p> 
  <h2> Files in Project </h2>
<p id=filelist ></p>
 <script>
 const files = ["player.js","GameENV.js","rpg.md"];
let text = "";
  for (let i=0; i < files.length; i++)
   {
    text +=files[i] + "<br>";
    }
  document.getElementById("filelist").innerHTML = text;
 </script>


<p> <a href="https://github.com/AmalJinan/Amal_2025/issues/15"> Integration Issue </a></p>
<p> <a href="https://github.com/AmalJinan/Amal_2025/blob/main/assets/js/rpg/Player.js"> RPG EXAMPLE CODE </a> </p>  
 <p>

  Scale Factor - It defines the player size and the height and width and also defies the canvas height <br> 
    
    
    Step Factor-Speed control, player takes 1/nth steps (fast but not too fast) <br>
    

    const ANIMATION_RATE-  Frames per second (FPS) for sprite animations, 'cause smooth is cool <br>
    
 <h2> Player.js Explanation </h2>
    <b>Step 1:</b> Get the game environment dimensions <br>
     
    <b>Step 2:</b> Set player properties (either from sprite data or default values) <br>
    
     
    <b>Step 3:</b> Load up the sprite sheet (or don’t, and be a red square superstar) <br>
          <p><a href="https://github.com/AmalJinan/Amal_2025/blob/main/images/rpg/turtle.png"> Sample Turtle Sprite sheet </a></p> <br>

         
    
    <b>Step 4:</b> Size matters! Adjust player size relative to the canvas <br>
        EX: this.size = GameEnv.innerHeight / this.scaleFactor; <br>

        

    <b>Step 5:</b> Set initial player position and velocity (static until you start moving!) <br>
         EX: this.position = { x: 0, y: GameEnv.innerHeight - this.size }; // 🏃‍♂️ Spawn at the bottom left 
         this.velocity = { x: 0, y: 0 }; // Not moving… *yet* <br>

         
    
    <b>Step 6:</b> Let’s resize our player, and hook up some event listeners (move that player!) <br>
       resize() <br>
          Resizes the player when the window size changes. Adapt or perish! <br>
       bindEventListeners() <br>


</p> 
<h2> 
  Personalization 
</h2>
<p>
  <img width="1379" alt="Screen Shot 2024-10-06 at 7 00 08 PM" src="https://github.com/user-attachments/assets/fd64de70-a95c-4ded-b82d-e0d2cb56c4f2">

</p>


</body>
</html>
