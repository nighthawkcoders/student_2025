---
layout: base
title: Personalized Project Reference (PPR) and MCQ Recheck
description: Seed - PPR and MCQ Recheck
permalink: /seed/
image: /images/mario.png
hide: true
---

<h>Procedure:</h>
- Defines procedure's name, which is <code>get_chinese</code> which is the static method in the ChinaAPI class and the data would be returned in JSON format.
<img src="{{site.baseurl}}/images/procname.png" alt="procedurename">
<img src="{{site.baseurl}}/images/proc1.png" alt="procedure1">

- The procedure is the <code>.then(response => {...})</code> function within the <code>fetch()</code> call.
It returns a table updated with restaurant data from ChinaAPI, which is found in the backend.

- The function uses <code>data.chinese</code> from the API response, affecting what is displayed dynamically.
Implements sequencing, selection, and iteration

- Sequencing: The function first fetches the data, then processes and displays it in a table in frontend
- Selection: Uses an if condition <code>if (response.status !== 200) { console.error(response.status); return; } </code> to check for errors.
- Iteration: Loops through <code>data.chinese</code> using for const row of <code>data.chinese</code>, adding rows dynamically.

- Where the procedure is being called in the program:
<img src="{{site.baseurl}}/images/call2.png" alt="call2">

- The <code>fetch()</code> function is not explicitly called inside another function—it runs immediately when the script loads. This means that as soon as the web page loads, the script executes the fetch() call and retrieves data from ChinaAPI
<img src="{{site.baseurl}}/images/procname.png" alt="api">

<h>List:</h>

- <code>data.chinese</code> contains the restaurant information.

<img src="{{site.baseurl}}/images/call.png" alt="call">
- Here, it shows that <code>data.chinese</code> is an array (list) of objects (dictionaries) from backend .
- It dynamically creates new table rows<code><tr></code> and table cells<code><td></code> elements for each restaurant.
These new elements are populated with data from data.chinese and displayed in the table.

- The table is updated as the data is fetched from ChinaAPI: 
<img src="{{site.baseurl}}/images/list.png" alt="list1">

- The program’s goal is to display restaurant information from the API, and ensures that data from the list appears in the HTML table.
<img src="{{site.baseurl}}/images/table4.png" alt="api">

<h>Multiple Choice Reflection:</h>
- Overall Score: 41/67
- Weaknesses: 1.B (Determine and design an appropriate method or approach to achieve the purpose), 3.B (Use abstraction to manage complexity in a program), 4.B (Determine the result of code segments), 4.C ( Identify and correct errors in algorithms and programs, including error discovery through testing). Most if not all of the questions that I missed included flowcharts, simulations, code segments, or algorithms that were difficult for me to visualize and understand in terms of coding. Howe
- Strengths/Improvement: Compared to my last score of 29/67, I would say that I was generally able to improve my score and especially discovered a better understanding of some of the code segments. However, I would say that the questions with code segments were still my weakest point and often difficult for me to understand and I would like to get more practice with those types of questions. Overall, I felt more comfortable with questions that contained the roman numerals and topics such as 1.A (how the programas function).
<center>
<img id="mcscore" src="{{site.baseurl}}/images/score.png">
<img id="mcstats" src="{{site.baseurl}}/images/mcstats.png">
</center>
<img id="corrections" src="{{site.baseurl}}/images/corrections.png">
- In order to improve my score on the real exam, I plan to continue watching Khan Academy tutorials and watchign College Board videos, specifically the videos that go over the topics that I missed on both the first MCQ as well as on this MCQ. I will also go over the reflection blog for the last MCQ we did and go over the topics and questions that I struggled with and redo them to get familar with the concepts that I am missing. 
