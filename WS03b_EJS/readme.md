# Workshop (WS03b) EJS
**Note:** You can complete all these exercises in a single file when appropriate. In that case, please comment in the code where each exercise can be found. Alternatively, you can create separate files for each exercise. In either case, please update this `readme.md` file to describe where the solutions for each exercise can be found.

---

# Exercise 1: Setting Up EJS with Express
**Objective:** Learn how to set up EJS as the templating engine in an Express application.

**Tasks:**
1. Create a new Node.js project and install Express and EJS using `npm install express ejs`.
2. Set up an Express application in `app.js`.
3. Configure the application to use EJS as the templating engine.
4. Create a basic route that renders an EJS template with a simple message.
5. Test your setup by navigating to the route in your web browser.

# Exercise 2: Passing Data to EJS Templates
**Objective:** Understand how to pass data from your Express application to EJS templates.

**Tasks:**
1. Create a new EJS template file `index.ejs` in a `views` directory.
2. Modify your route to pass a message and a list of items to the template.
3. Use EJS syntax to display the message and iterate over the list of items in the template.
4. Test your application to ensure the data is correctly displayed.

# Exercise 3: Using Partials in EJS
**Objective:** Learn how to use partials to reuse common template components.

**Tasks:**
1. Create a new partial template file `_header.ejs` with some basic HTML for a header.
2. Include the partial in your `index.ejs` template using the EJS include directive.
3. Create another partial `_footer.ejs` and include it in the `index.ejs` template.
4. Test your application to ensure the header and footer are correctly included.

# Exercise 4: Conditional Rendering in EJS
**Objective:** Understand how to use conditional statements in EJS templates.

**Tasks:**
1. Modify your route to pass a boolean value to the `index.ejs` template.
2. Use EJS syntax to conditionally render different content based on the boolean value.
3. Test your application by changing the boolean value and observing the changes in the rendered template.

# Exercise 5: Looping in EJS
**Objective:** Learn how to use loops to render lists of data in EJS templates.

**Tasks:**
1. Modify your route to pass an array of objects (e.g., a list of users) to the `index.ejs` template.
2. Use EJS syntax to loop through the array and render each object's properties in the template.
3. Test your application to ensure the list of objects is correctly displayed.

These exercises should help students get comfortable with using EJS in a Node.js and Express environment. If you need more advanced exercises or further details, feel free to ask!

## Copyright

© 2025 JariKovis