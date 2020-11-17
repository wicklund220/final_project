# final_project

# Project Description
The purpose of this app will be to allow users to create and keep track of their workouts, set goals for themselves to achieve. Users will create their workouts by adding lifts, the number of sets for each lift, the number of reps or amount of time for each set, and finally the weight and/or speed each set requires. Users will also also be able to set goals for themselves which can be anything from how much weight they want to gain or lose, a schedule for training to run a marathon, or simply a weekly schedule reminding them to workout along with an optional target date if the user would like to attain the goal by a certain time. 

# Screenshot of App
![app](https://i.imgur.com/v3qTzyBl.jpg)

# Technologies Used
Javascript, 
React, 
NodeJS/Express, 
Postgres, 
EmailJS, 
EvergreenUI

# Installation Instructions
Create a new front end repo in github, clone to desired file location in the terminal. Create the react app using npx create-react-app, and then install necessary dependcies through node package manager (react-router-dom, emailjs, evergreenui). Open app in code editor of choice, import installed dependencies.
For the back end, the process is similar. Create a new back end repo in github, clone to desired file location in terminal (preferrebly in the same parent folder as front end folder). Install necessary dependencies (npm, node js, express, postgres, sequelize, bcrypt, dotenv, cookie-parser, jsonwebtoken). Open backend app in code editor of choice, import dependencies. 

# ERD
![erd](https://i.imgur.com/WCDQch0l.jpg)

# Wireframes
![profile](https://i.imgur.com/vVtRSPYl.jpg)
![workouts](https://i.imgur.com/LGO8kSsl.jpg)
![goals](https://i.imgur.com/r1ZYNyXl.jpg)
![new_workout](https://i.imgur.com/lc3XiZsl.jpg)
![new_goal](https://i.imgur.com/QuGSQBfl.jpg)
![music](https://i.imgur.com/TQbJdsql.jpg)

# User Stories
1. user would like to track how much they weigh at the beginning of using the app on their weight loss journey
2. user is interested in setting a weekly schedule of their various workouts
3. user wants to create a new leg workout to get better definition
4. user wants to listen to their favorite playlist to stay motivated while they keep track of their upper body workout
5. user is interested in created a new workout to mix up their routine
6. user would like to create a goal of increasing their weekly mileage as they train for their first marathon
7. user wants to log what their weight is every week
8. user would like to set a goal to do a cardio workout, their least favorite workout, at least once a week
9. user wants to increase their bench press weight/reps on a weekly basis and wants to create a goal and workout to do so
10. user is interested in keeping track of their various workouts over time to see how much they've progressed in their fitness journey

# MVP
Create a fully functional react app that allows users to create and store workouts and goals, with a node.js/express back end to remember user information. Also include a spotify API to allow users to listen to music while using the app. App will have full CRUD functionality. The app will also have the appearance of a professional website/app. I plan to implement Material UI as my technology not learned in class. 

# Stretch Goals
Allow users to see other users workouts
Add workout reminders to outlook or similar calendar application from app
Import Google maps to show user where nearby gyms are located
Allow users to upload progress photos onto their profile and/or goals page with a file uploader rather than a url

# Lessons Learned/Things to Improve Upon
I would have liked to have implemented a spotify widget, and at one point I had a single playlist working, but I wasn't able to get it to work for more than one when it came time to deploy and I had other issues that took priority so I omitted it from the app completely for the time being. I was not able to get the file selector working, so I went with an email sender, but a file selector would be a greater challenge to tackle in the future. 
