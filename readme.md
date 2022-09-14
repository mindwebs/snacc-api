# Project Snacc

A software solution for managing hostel meals and mess.

## Contents

1. [Description](#description)
1. [Project structure](#project-structure)
1. [Getting started](#getting-started)
1. [Built with](#built-with)
1. [Authors](#authors)

## Description

Snacc is being developed by [Mangalam Sharma](https://github.com/mangalam0512) as a part of his training period of learning backend with node ts under Mind Webs Ventures, mentored by [Aunomitra Ghosh](https://github.com/ant-ghost) and [Ayush Singh](https://github.com/singhayushh).

This project serves as a software solution for hostels to manage their mess related tasks.

### What's the problem?

There is a lack of an online platform for hostel boarders to stay updated about their daily hostel meals as well as to turn their meal off or on for the day. All these tasks are done manually using registers and papers and not very reliable and viable. This project serves to solve the above problem.

### How can this project help?

This project will help manage mess related tasks - like maintaining a log of food items being ordered, meals being cooked daily, count number of meals to be cooked by taking input from users whether to turn their meal on or off for the day and some more minor helpful features.

## Project structure

```
/
  ├── build/              build files for typescript (gitignored).
  ├── node_modules/       npm packages (gitignored).
  ├── src/              
    ├── config/           configs for db, swagger and other packages go here
    ├── controllers/      controller functions for every route. controllers make calls to services
    ├── interfaces/       structure for various data objects are defined under this directory
    ├── middlewares/      middlewares for various routes go here
    ├── models/           database schema / models go here
    ├── routes/           routes or endpoint definitions go here, routes make calls to controllers
    ├── services/         files that process and query the database go here 
    ├── app.js              entry point for our project
  ├── .env                environment variables used in the project (gitignored)
  ├── .gitignore          stores files and directories to be ignored in commits
  ├── .prettierrc         configuration for prettier to help maintain a common code formatting
  ├── package.json        metadata of the project
  ├── package-lock.json   stores version of every package used in the project
  └── readme.md           details and instructions about the project go here

```

## Getting started

To run the api locally, follow these steps:
1. clone the repository
1. create the .env file with PORT, CONNECT_URL and JWT_SECRET variables
1. run `npm i` to install packages defined in package.json
1. run `npm run start` to start the backend server.

If you make any change to the codebase, run `npm run prettify` to format the code using the configured prettier npm package.

### Prerequisites

1. node and npm
1. typescript
1. postman

## Built with

- NodeTS and Express for backend
- MongoDB as the database
- Postman for API Testing

## Authors

<a href="https://github.com/mindwebs/snacc-api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mindwebs/snacc-api" />
</a>