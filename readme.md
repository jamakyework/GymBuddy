GymBuddy Workout Planner
========================
John Amakye
January 15th 2016 | Version 1.0

##Document Objectives
The purpose of this document is to provide detailed documentation about the application to be developed for the Tau Cohort Solo Project.

##Application Overview
GymBuddy Workout planner is a full stack web application that will allow users to create and track workouts. User will be able to login, create and store workouts for each day of the week. The workouts will consist of a number of sets and repetitions or duration for time for each exercise. There will be the capability for users to also record length of workouts for timed exercises. Users will have the ability to make changes and update this information as their needs change over time.

##Application Features
To access the application, users will need to register and create a unique login. Once successfully logged in users will have the ability to create, store and view workout plans and exercises.
A workout plan will consist of a set of exercises to be performed by users based on the day of the week. Users will have the capability to create a workout plan by picking from a set of predefined exercises which will be provided by the API or by creating their own custom exercise for exercises that may not be covered by the API. For each exercise users will be able to indicate the number of sets, repetitions or duration of time and add it to a workout plan. Users will also have the ability to indicate a selected weight for each exercise if desired and applicable. Once a workout plan or custom exercise is created users will have the ability to update or delete either entire plan or exercise.

Technologies
------------
Technology to be used in this project will consist of  the MEAN stack (Mongo, Express, Angular, Node),  Bootstrap for front-end styling and passport for authentication. The application will utilize data from the “wger Workout Manager API”.

##Login
Users will need to either login or register a user account to access application. Once users have created an account users will be able to login and create a workout plan.

##Register
 On clicking the register button users will be taken to this page and requested to create a username and password.  This would be a feature that could be incorporated however the key feature here will be to ensure that users can create usernames and passwords.

##Select Existing Workout Plan
This will be one of the the main features of the application. This feature will give users the option to create a workout plan or select from an existing workout plan.  If user is selecting an existing workout plan user can pick the plan from a drop down. If user is creating a new workout or exercise user will need to click “Create New” button. This will prompt user to select if they would like to create a new workout plan or a new exercise.

##Create Workout Plan
To create a plan users will need to; enter a name, select a day of the week, select an exercise to add,  number of sets, number of repetitions or time duration and weight(optional).
Once an exercise has been selected users can click “Add Exercise” and continue to add exercises to the same day  or pick a different day of the week and continue to add exercises. Once this has been completed users can select “Create plan” to add to the existing plan drop down on login.
A goal for this feature will be to attempt to include common workouts from wger Workout Manager API.
Users will have the capability to create custom exercises. Custom exercises once created can be picked from the exercise drop down.

##Add Custom Exercise
To add an exercise, users will need to create a name, enter a short description of the exercise. Users will also have the options to add an image or gif of the exercise.

##Edit/Update/Delete Exercise or Workout Plan
Once users have created workout plans and custom exercises, user will have the options to either edit and update existing custom exercises and workout plans or delete custom exercises or workout plans.

##Workout View
In this view users will select the day, then select the exercise they would like to complete.

##Process Flow

##Project Milestones and Schedule
Milestone (feature)
Estimated Due Date
Scope of Work Approval
01-17
Setup project, create Read Me document and locate necessary resources (necessary files)
01-18
Create front end pages/views
01-18
Angular/ Node/Express - Setup client side to connect to server file and vice versa
01-18
Mongo/Mongoose - create database schema and connect to database
01-18
Attempt to connect to API
01-19
Setup passport for user authentication
01-19
POC
01-2
Style it up yo! Apply Style
01-23
MVP
EOD 01-24

##Browsers
Application will fully support browsers listed below. All browsers or versions not listed below are considered out of scope.
Browser Name
Version
Chrome
Version 55.0.2883.95 (64-bit)
Optimized for Mobile (Android)

##Assumptions
While completing this estimate the following assumptions were made:
* wger Workout Manager API will not change
* Browser compatibility will remain if new browser version is released

##Technologies
* Node
* Express
* Angular
* wger Workout Manager API
* MongoDB
* Heroku

##Stretch Goals/Future Enhancements
Add personal fitness tracking connectivity; Future enhancements to this application could be potential integration with a fitness tracker to record exercise data
GeoFencing to open app when close to Gym; GeoFencing technology could be used to activate the application when nearing selected gym or workout facility
Password Verification; This area could potentially include a secondary field to ensure that users enter in passwords correctly. This could be a feature as simple as ensuring that when users click submit data in input A matches data input B before request is submitted on the back-end and if not alert user to ensure that the entered passwords match
Password recovery option; help users recover account if password is lost
Delete account option; option for users to delete account if they no longer want to use application
Option to check off exercise when completed for the day
Monthly email report/summary of workouts indicating days worked out and exercises completed

##Steps completed
 * [x] featureBranch 1 - User Login and Authentication/User Database
 * [] featureBranch 2 - Create Views
 * [] featureBranch 3 - Add/Create Workout (Will like to collect user input from dom and create workout in DB)
 * [] featureBranch 4 - Connect to API
 * [] featureBranch 5 - Connect Views to logic
