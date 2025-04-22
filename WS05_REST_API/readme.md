
# REST API Workshop

**Note:** You can complete all these exercises in a single file when appropriate. In that case, please comment in the code where each exercise can be found. Alternatively, you can create separate files for each exercise. In either case, please update this `readme.md` file to describe where the solutions for each exercise can be found.

---

## Objective

Learn how to build a RESTful API using Node.js, Express, and MongoDB. This workshop will guide you through creating a web application with a REST API for a database of your choice (e.g., music, sports, or projects).

---

## Tasks

### **Task 1: Create a REST API with at Least 5 Routes**

**Objective:** Set up a REST API with the following routes:

| HTTP Verb | URL                        | Operation                                   |
|-----------|----------------------------|---------------------------------------------|
| GET       | `/api/getall`              | Return all documents in the collection      |
| GET       | `/api/:id`                 | Return one item with the given ID           |
| POST      | `/api/add`                 | Create a new document in the collection     |
| PUT/PATCH | `/api/update/:id`          | Update the document with the given ID       |
| DELETE    | `/api/delete/:id`          | Delete the item with the given ID           |

**Instructions:**
1. Create a new Node.js project and install the required dependencies:
   ```sh
   npm init -y
   npm install express mongoose body-parser
   ```
2. Set up an Express server in `app.js`.
3. Define the above routes in your API.
4. Send responses as JSON, handle errors properly, and send appropriate HTTP status codes to the client.
5. Feel free to implement additional routes if needed.

---

### **Task 2: Use Mongoose for Database Queries**

**Objective:** Use Mongoose to interact with a MongoDB database.

**Instructions:**
1. Set up a MongoDB database using MongoDB Atlas or a local MongoDB instance.
2. Install Mongoose:
   ```sh
   npm install mongoose
   ```
3. Define a Mongoose schema and model for your database (e.g., a `Music` schema for a music database).
4. Use Mongoose methods (`find`, `findById`, `create`, `findByIdAndUpdate`, `findByIdAndDelete`) in your API routes to interact with the database.

---

### **Task 3: Test Your API with POSTMAN**

**Objective:** Test all API routes using POSTMAN.

**Instructions:**
1. Open POSTMAN and create requests for each route:
   - `GET /api/getall`: Test retrieving all documents.
   - `GET /api/:id`: Test retrieving a single document by ID.
   - `POST /api/add`: Test creating a new document by sending a JSON body.
   - `PUT/PATCH /api/update/:id`: Test updating a document by sending a JSON body with updated fields.
   - `DELETE /api/delete/:id`: Test deleting a document by ID.
2. Verify that the API responds with the correct JSON data and status codes.
3. Test error handling by sending invalid requests (e.g., invalid IDs or missing fields).

---

### **Task 4: Implement Error Handling**

**Objective:** Ensure your API handles errors gracefully.

**Instructions:**
1. Add error handling middleware to your Express application.
2. Handle common errors such as:
   - Invalid request data (e.g., missing required fields).
   - Invalid IDs (e.g., non-existent or malformed IDs).
   - Database connection errors.
3. Send appropriate HTTP status codes (e.g., `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`) and error messages to the client.

---

### **Task 5: Add Documentation**

**Objective:** Document your API for easy usage.

**Instructions:**
1. Create a `README.md` file or use tools Postman Collections to document your API.
2. Include the following details:
   - A description of your API.
   - A list of all available routes with their HTTP methods, URLs, and expected request/response formats.
   - Example requests and responses for each route.

---

## License

This project is licensed under the MIT License.

---

## Copyright

© 2025 JariKovis
```
