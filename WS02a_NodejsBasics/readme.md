# Node.js Basics Exercises

**Note:** You can complete all these exercises in a single file when appropriate. In that case, please comment in the code where each exercise can be found. Alternatively, you can create separate files for each exercise. In either case, please update this `readme.md` file to describe where the solutions for each exercise can be found.


# Exercise 1: Setting Up Node.js
**Objective:** Learn how to install and set up Node.js on your machine.

**Tasks:**
1. Follow the instructions on the Node.js website to download and install Node.js.
2. Verify the installation by running `node -v` and `npm -v` in your terminal.
3. Create a new directory for your project and initialize it with `npm init`.

# Exercise 2: Creating a Simple Node.js Application
**Objective:** Understand the basics of creating and running a Node.js application.

**Tasks:**
1. Create a new file `app.js`.
2. Write a simple script that logs "Hello, Node.js!" to the console.
3. Run your script using `node app.js`.

# Exercise 3: Working with Modules
**Objective:** Learn how to use built-in and custom modules in Node.js.

**Tasks:**
1. Create a new file `math.js` that exports functions for addition and subtraction.
2. Create another file `stringUtils.js` that exports functions for string manipulation (e.g., converting a string to uppercase and reversing a string).
3. Create yet another custom module `dateUtils.js` that exports functions for date manipulation (e.g., getting the current date and formatting a date).
4. Import these functions into your `app.js` file.
5. Use the imported functions to perform some calculations and string manipulations, then log the results to the console.

For more information on creating and using custom modules in Node.js, refer to this [article](https://www.studytrigger.com/article/node-js-custom-modules-how-to-create-export-and-utilize-them/).

# Exercise 4: Creating an HTTP Server
**Objective:** Build a basic HTTP server using the http module.

**Tasks:**
1. Create a new file `server.js`.
2. Use the http module to create a server that responds with "Hello, World!" to any incoming request at the root URL (`/`).
3. Add a route `/about` that responds with "About Page".
4. Add a route `/contact` that responds with "Contact Page".
5. Make the server listen on port 3000.
6. Test your server by navigating to `http://localhost:3000/`, `http://localhost:3000/about`, and `http://localhost:3000/contact` in your web browser.

## Copyright

© 2025 JariKovis