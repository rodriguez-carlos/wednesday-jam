# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Website usage

### Login

To login, input any string as a username, and then remove any vowels contained to make its password. Both username and password must contain at least one character. Activate the eye icon to toggle password visibility.
Examples:
1. username = "hello" - password = 'hll'
2. username = '12345' - password = '12345'

### Welcome page

Following successful login, user will be redirected to a new page with a tourism recommendation in the US. The temperature for the city of choice will be initially displayed in Farenheit, and user can activate the "Switch to Celsius" button to display temperature in this unit. Page can be updated to receive a new tourism recommendation.