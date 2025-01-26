
# Event Management System

The Event Management System is a full-stack web application that allows users to manage ,view, and interact with the events. The application is build with the backend and the Frontend. Backend is hand;ed with the Node.Js and ExpressJs with the relational database like postgreSQL database and the frontend uses the React.Js library with the vite for the faster building the application as well In this project for the styling i've used the tailwindCSS.

## Features
- Event creation by using Add event functionality.
- Event Details by viewing the details of Events.
- Filtering by the category.
- Sorting by the event name and the start_date_time.

##  Steps to run the client and server locally

To get the frontend running locally, Follow the below steps.

- cd frontend
- npm install
- npm run dev 

To get the backend running locally, Follow the below steps.

- cd backend
- npm install
- npm run dev

## Questions & Answers

1. What areas of app did you focus on ? what problems were you trying to solve ?

 - In this project, I focused on the both the frontend and backend development. However, I focused more on the backend as I was working with PostgreSQL, a relational database system that was new to me. I had to learn and implement PostgreSQL in the code, which was an exciting and challenging experience.

Challenges I faced during development :
 - Initially, I had trouble connecting to the PostgreSQl database. After some troubleshooting, I was able to resolve this issueand establish a connection successfully
 - After setting up the database and tables, I encountered a strange issue where all data was lost whenever the app restarted. As a beginner with PostgreSQL, I wasn't sure why this was happening. After some research, I figured out how to prevent data loss and ensured that data persists event after restarting the app
 - On the frontend, while setting up my React app, I faced an issue while trying to integrate Tailwind CSS. I encountered errors during the setup, but I found an problem and then resolved that successfully

But Overall , I really learned a lot while solving these issues , especially in the terms of working the relational database.

2. What trade-offs did you make, and why?

 - Since I was new  to postgreSQL, I had to spend additional time to learning and setting up, especially integrating it with the backend. This choice had its trade-offs, as it meant I coudn't quickly implement some features and APIs due to my need to familiarize myself with the relational database concepts and structure. However, I opted for PostgreSQL because it fits well with your company and the project's requirements for complex queries and relationships between entities like events and categories, which a NoSQL database might not handle as effectively.

3. What is the weakest part of your solution, and how would you improve it with more time?

 - The frontend UI is functional, but it could be more visually appealing. With more time, I would improve the design to make it more attractive and user-friendly

4.  How long did you spend on the project?

 - I took around 6 and a half days to complete the project. During weekdays, I dedicated 3-4 hours after office hours to learning PostgreSQL and implementing the backend. Since I’ve worked a lot with frontend development and NoSQL databases before, the frontend part didn’t take much time. This project was my first experience working with a relational database like PostgreSQL, which required a lot of learning and time investment

5. If you used any libraries or tools, why did you choose them?

 - Yes, I used Tailwind CSS for styling because I'm more familiar with it. It's the best library for creating responsive and attractive UIs, making it easier to implement design without having to write a lot of custom CSS. It also helps maintain consistency across the application

6.  Did you copy any code or dependencies? If so, attribute them?

 - Yes, I copied the code for setting up the PostgreSQL database configuration and syncing the database from an online source to help me quickly get started. The code was a basic template, and I adapted it to fit my specific project needs. I made sure to understand how it works and modified it to match the structure of my app

7. What considerations did you make for scalability in the backend?

For scalability in the backend, I focused on:
  - Designing the PostgreSQL database efficiently with proper relations and indexing to optimize performance.
  - Keeping the backend modular to easily scale or extend in the future.
  - Implementing error handling and logging for better monitoring

8. How did you approach designing the user interface to make it user-friendly and visually
appealing?

 - I focused on simplicity, consistency, and responsiveness using Tailwind CSS. The design is clean, with clear navigation and interactive elements, ensuring a smooth user experience on both desktop and mobile.