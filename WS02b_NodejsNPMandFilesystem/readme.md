# Workshop: Nodejs nmp ja file system

**Note:** You can complete all these exercises in a single file when appropriate. In that case, please comment in the code where each exercise can be found. Alternatively, you can create separate files for each exercise. In either case, please update this `readme.md` file to describe where the solutions for each exercise can be found.



# Exercise 1: Initializing a Node.js Project and Installing Packages
**Objective:** Learn how to initialize a Node.js project and install npm packages.

**Tasks:**
1. Create a new directory for your project and navigate into it.
2. Initialize a new Node.js project using `npm init` and follow the prompts to create a `package.json` file.
3. Install the `axios` package using `npm install axios`.
4. Verify that `axios` is listed in the dependencies section of your `package.json` file.
5. Create a simple `app.js` file that uses `axios` to make a GET request to a public API and log the response to the console.
6. Run your application using `node app.js` and verify it's working by checking the console output.


# Exercise 2: Managing Development Dependencies
**Objective:** Understand how to manage development dependencies using npm.

**Tasks:**
1. Install the `nodemon` package as a development dependency using `npm install nodemon --save-dev`.
2. Verify that `nodemon` is listed in the devDependencies section of your `package.json` file.
3. Modify the scripts section of your `package.json` file to add a start script that uses `nodemon` to run your `app.js` file.
4. Run your application using `npm start` and verify that `nodemon` restarts the server automatically when you make changes to `app.js`.

# Exercise 3: Updating and Removing Packages
**Objective:** Learn how to update and remove npm packages.

**Tasks:**
1. Check for outdated packages in your project using `npm outdated`.
2. Update a specific package (e.g., axios) to the latest version using `npm update axios`.
3. Verify that the package has been updated in the `package.json` file.
4. Remove a package (e.g., nodemon) from your project using `npm uninstall nodemon`.
5. Verify that the package has been removed from the devDependencies section of your `package.json` file.

## Exercise 4: Reading Files
**Objective:** Learn how to read files using the fs module.

**Tasks:**
1. Install the `fs` module using `npm install fs`.
2. Create a new file `example.txt` and write some text into it.
3. Write a Node.js script that reads the content of `example.txt` using `fs.readFile`.
4. Log the content of the file to the console.
5. Handle any potential errors that might occur during the file reading process.

# Exercise 5: Writing Files
**Objective:** Understand how to write data to files using the fs module.

**Tasks:**
1. Create a new Node.js script that writes a string of text to a file named `output.txt` using `fs.writeFile`.
2. Verify that the file is created and contains the correct text.
3. Modify the script to append additional text to `output.txt` using `fs.appendFile`.
4. Log a message to the console indicating that the file has been successfully written.

# Exercise 6: Deleting Files
**Objective:** Learn how to delete files using the fs module.

**Tasks:**
1. Create a new file `temp.txt` and write some text into it.
2. Write a Node.js script that deletes `temp.txt` using `fs.unlink`.
3. Ensure that the file is deleted and handle any errors that might occur.
4. Log a message to the console indicating that the file has been successfully deleted.

# Exercise 7: Working with Directories
**Objective:** Understand how to create and remove directories using the fs module.

**Tasks:**
1. Write a Node.js script that creates a new directory named `testDir` using `fs.mkdir`.
2. Verify that the directory is created.
3. Modify the script to remove `testDir` using `fs.rmdir`.
4. Handle any errors that might occur during the directory creation and removal process.

# Exercise 8: Watching for File Changes
**Objective:** Learn how to watch for changes in files using the fs module.

**Tasks:**
1. Create a new file `watch.txt` and write some initial text into it.
2. Write a Node.js script that uses `fs.watch` to monitor changes to `watch.txt`.
3. Log a message to the console whenever the file is modified.
4. Test the script by making changes to `watch.txt` and observing the console output.

## Copyright

© 2025 JariKovis