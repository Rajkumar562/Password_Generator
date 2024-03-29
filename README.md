# Password Generator

A simple React application for generating secure passwords with customizable length and character sets.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Hooks Used](#hooks-used)

## Introduction

This project provides a user-friendly interface to generate strong passwords with varying lengths and character sets. It's built using React and designed to be easy to use and customizable.

## Features

- Generate secure passwords with customizable length
- Include or exclude numbers and special characters in generated passwords
- Copy generated passwords to clipboard with a single click
- Simple and intuitive user interface

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/Rajkumar562/Password_Generator
```

2. Navigate into the project directory:

```
cd Password_Generator
```

3. Install dependencies using npm or yarn:

```
npm install
```

or

```
yarn install
```

4. Start the development server:

```
npm run dev
```

or

```
yarn start
```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

1. Adjust the password length using the range input.
2. Check or uncheck the "Numbers" and "Special Characters" checkboxes to include or exclude them in the generated password.
3. The generated password will be displayed in the input field.
4. Click the "Copy" button to copy the generated password to the clipboard.

## Hooks Used

1. useState: It is used to manage various state variables like the length of the generated password, boolean values of numbers and special characters inclusion in the password generation, and the actual generated password.

2. useEffect: This hook is used to trigger the password generation function whenever any of the dependencies (password length, inclusion of numbers, inclusion of special characters) change. This ensures that the generated password is always up to date.

3. useCallback: The useCallback hook is used to memoize the password generation function and the copy password function. By memoizing these functions with appropriate dependencies, unnecessary re-renders are prevented, optimizing performance.

4. useRef: This hook creates a reference to a DOM element, which is used to reference the input field where the generated password is displayed. This reference is then utilized in the copy password function to select and copy the password to the clipboard without causing re-renders.

# End of Repository
