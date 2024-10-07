---
layout: base
title: Blogs/Hack
description: Blogs
author: Amal Jinan
hide: false
---

##### Essentials of Development Tools

<!DOCTYPE html>
<html>
<body>
<h1> ACTIVATE TOOLS SETUP TUTORIAL </h1>
<p> 
Understanding and utilizing the right development tools is crucial for a successful coding journey. This section highlights the core components and additional tools that will enhance your learning experience and collaboration.

Laptop Requirement: Ensure you have a laptop with development tools installed. MacOS and Windows are preferred. Chromebooks are supported by using a KASM cloud workspace.
Version Control: GitHub will store your coding projects and serve as a collaboration hub with others.
Code Editor: This course will use Visual Studio Code for its extensive support for programming languages and helpful coding features.
Interactive Coding: In this course, coding will be interactive and instantaneous. Visual Studio Code, with support for Jupyter Notebooks and GitHub Pages, is ideal for coding, data analysis, capturing notes, and creating documentation.
Web Hosting: Throughout this course, students and teachers will publish their projects and notes using GitHub pages. Students will showcase their projects and chronicle their development journey.

###### Install Developer Tools
cd
mkdir nighthawk 
cd nighthawk 
git clone https://github.com/nighthawkcoders/portfolio_2025.git
cd
make a clone of your student repository 
# move to project directory
cd student_2025
# make virtual environment by script
scripts/venv.sh
# activate virtual environment, observe prompt change after running it
source venv/bin/activate
# install python packages for project 
pip install -r requirements.txt
# show Kernels, python3 needs must be in the list
jupyter kernelspec list
# install gems (Ruby packages), required for Jekyll requirements in GitHub Pages
bundle install
# open VSCode
code .
#  Most tools have been pre-installed. Run shell command to automatically finish tool setup.
cd
cd nighthawk/portfolio_2025/scripts
./activate.sh 

##### Git identification
Setup personal GitHub variables: Change youremail@gmail.com and yourGHID to match your credentials. This is required prior to syncing code to GitHub. These configurations ensure that your commits are associated with your GitHub account, which is important for tracking contributions and collaboration.

Set your email address: This email should be the same one associated with your GitHub account.
git config --global user.email youremail@gmail.com
Set your GitHub user.name: This should be your GitHub ID.
git config --global user.name yourGHID 
After running these commands, you can verify the configurations by running:

git config --global --list
</p>
  <h2> Files in Project </h2>
<p >
  files = ['player.js','GameENV.js','rpg.md']
</p>


<p> <a href="https://github.com/AmalJinan/Amal_2025/issues/15"></a></p>
<p> 
  <a <href="https://github.com/AmalJinan/Amal_2025/blob/main/assets/js/rpg/Player.js"> </a>
  <a> 
     Scale Factor - It defines the player size and the height and width and also defies the canvas height
    Step Factor-Speed control, player takes 1/nth steps (fast but not too fast)
    const ANIMATION_RATE-  Frames per second (FPS) for sprite animations, 'cause smooth is cool
 <h2> Player Setup </h2>
    Step 1: Get the game environment dimensions
     
    Step 2: Set player properties (either from sprite data or default values)
     
    Step 3: Load up the sprite sheet (or don’t, and be a red square superstar)
         Sample Turtle Sprite sheet - <a href="https://github.com/AmalJinan/Amal_2025/blob/main/images/rpg/turtle.png"> </a>
    
    Step 4: Size matters! Adjust player size relative to the canvas
        EX: this.size = GameEnv.innerHeight / this.scaleFactor;

    Step 5: Set initial player position and velocity (static until you start moving!)
         EX: this.position = { x: 0, y: GameEnv.innerHeight - this.size }; // 🏃‍♂️ Spawn at the bottom left
         this.velocity = { x: 0, y: 0 }; // Not moving… *yet*
    
    Step 6: Let’s resize our player, and hook up some event listeners (move that player!)
       resize()
          Resizes the player when the window size changes. Adapt or perish!
       bindEventListeners()

  </a>
</p> 
<h2> 
  Personalization 
</h2>
<p>
  <img width="1379" alt="Screen Shot 2024-10-06 at 7 00 08 PM" src="https://github.com/user-attachments/assets/fd64de70-a95c-4ded-b82d-e0d2cb56c4f2">

</p>


</body>
</html>
