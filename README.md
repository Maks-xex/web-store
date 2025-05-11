# Web-store

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This project is a web application built with **React** for the frontend. It includes scripts for development and building the application. This **README** provides instructions on how to set up and use the project.

---

## Requirements

- **Node.js**: Version 20

## Usage

1. Install dependencies using the command

   ```bash
   npm install
   ```

2. Start the development server using the command

   ```bash
   npm start
   ```

3. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).
4. Begin developing your project by editing the source files in the `src` directory.

---

## Scripts

This project includes several npm scripts defined in the `package.json` file. Here are some of the key scripts you can use:

## Available Scripts

In this project, you can run the following commands using npm run `<script-name>` or yarn `<script-name>` (if you're using Yarn).

- ### `build`

  Runs the build process using `react-scripts`. This command bundles the app into static files for production. It minimizes and optimizes the JavaScript, CSS, and other assets. The build output will be saved in the `build/` directory .

  ```bash
  npm run build
  ```

- ### `start`

  Starts the development server using `react-scripts`. It enables hot-reloading, so changes to your files will be reflected in real-time without needing to manually refresh the browser.

  ```bash
  npm start
  ```

- ### `test`

  Runs the tests once using `react-scripts` in non-watch mode. This is useful for checking that everything is working correctly before deployment or commits. It doesn't watch for changes after running the tests.

  ```bash
  npm run test
  ```

- ### `eject`

  Ejects the project from `create-react-app`. This gives you full control over the Webpack configuration, Babel settings, and other build-related tools. Note: This operation is irreversible.

  ```bash
  npm run eject
  ```

- ### `prepare`

  Installs Husky hooks. Husky is used to enforce git hooks such as running linting or tests before commits or pushes. This command prepares the git hooks to ensure quality control on code.

  ```bash
  npm run prepare
  ```

- ### `lint:check`

  Runs ESLint on all TypeScript files (`.ts` and `.tsx`) in the `src/` directory to check for code quality and style issues based on the configured rules.

  ```bash
  npm run lint:check
  ```

- ### `format`

  Runs Prettier to automatically format all the code in your project according to the Prettier configuration. This helps ensure consistent code style across the project.

  ```bash
  npm run format
  ```

- ### `format:check`

  Checks if the code is formatted according to Prettier's rules without actually modifying any files. It can be used to ensure that all code adheres to the formatting rules before committing.

  ```bash
  npm run format:check
  ```

- ### `stylelint:check`

  Runs Stylelint on all CSS and SCSS files to check for style violations based on the configured rules. It's used to enforce consistency in stylesheets.

  ```bash
  npm run stylelint:check
  ```
