# FizzBuzz Kata for Typescript and React
This project puts a spin on the classic FizzBuzz kata.
Instead of writing a simple console application, you will be creating an interactive web application using React.

## Goals for This Kata
You will be creating a React application that follows Test Driven Development (TDD) and the concept of Red-Green-Refactor.
Commits should be small and frequent, and they should shows your progress.
Each commit should be single thought that provides a simple description of your change.

As you work through this kata, you might see opportunities to refactor your code.
Though, before you do, make sure that all your tests are green and the refactor is its own commit.
This will help you in determining if a failing test is due to new functionality or a refactor to existing code.

## Before You Start
- Have Node version 14 or higher installed. LTS version is recommended. Ways to install Node:
  - [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm#installing-and-updating) (Recommended)
  - Download from [Node's Official Site](https://nodejs.org/)
- Clone this repository, and checkout a new branch for your kata.
  - This will make it easier to start again with a clean slate.
- Install your dependencies with `npm install`.
- Be sure you can start your development server with `npm start` and your test runner with `npm test`.
  - See the Getting Started section below for an explanation of these scripts.
- Have your documentation available:
  - [React](https://reactjs.org/docs/hello-world.html)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/cheatsheet)

## Requirements
- Your application should have a counter that has an initial value of `1`.
- Render a `plus` button that increments your counter by `1`.
- Render a `minus` button that decrements your counter by `1`.
- Your counter cannot be less than `1`
- Render the current value of your counter.
- Render a second value that will act as your output. To start, it can be the same value as your counter.
- Next, you will start applying the rules of FizzBuzz to your counter:
  - When your counter is a multiple of 3, display `Fizz`.
  - When your counter is a multiple of 5, display `Buzz`.
  - When your counter is a multiple of both 3 and 5, display `FizzBuzz`.
  - For all other numbers, display the number itself.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
