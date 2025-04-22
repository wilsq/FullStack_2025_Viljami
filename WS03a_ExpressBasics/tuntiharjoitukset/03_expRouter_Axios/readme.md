# Movie Data Retrieval Server

**Objective:** Learn how to retrieve movie data from the Open Movie Database (OMDb) using Axios in an Express application.

## Setting Up the Project

1. **Install Node.js and npm** if you haven't already.
2. **Create a new directory** for your project and navigate into it.
3. **Initialize a new Node.js project** using `npm init`.
4. **Install Express and Axios** using the following command:
   ```sh
   npm install express axios
   ```

## Project Structure

```
project-root/
├── routes/
│   └── movies.js
├── .env
└── app.js
```

## Creating the Application

1. **Create a basic app.js file** that sets up an Express application and listens on port 3005.
2. **Set up a route** that retrieves movie data from the OMDb API using Axios and responds with the data.

### Example Code

### app.js
```javascript
//haetaan express moduuli
const express = require("express");
//haetaan axios moduuli
const axios = require("axios");
// luodaan express-instanssi
const app = express();
// haetaan movies.js router
const movies = require('./routes/movies');

//haetaan PORT ympäristömuuttuja .env tiedostosta
const PORT = process.env.PORT05 || 3005;

// käytetään movies.js routeria
app.use('/', movies);

// kuunnellaan porttia ja tulostetaan konsoliin viesti
app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
});
```

### routes/movies.js
```javascript
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to fetch movie data
router.get('/movie/:title', async (req, res) => {
  const movieTitle = req.params.title;
  const apiKey = process.env.OMDB_API_KEY; // Replace with your OMDb API key

  try {
    const response = await axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`);
    const movieData = response.data;
    res.json(movieData);
  } catch (error) {
    res.status(500).send('Error retrieving movie data');
  }
});

module.exports = router;
```

### .env
```
PORT05=3005
OMDB_API_KEY=your_omdb_api_key
```

 Instructions###

1. **Replace `your_omdb_api_key`** with your actual OMDb API key in the `.env` file.
2. **Run your application** using the following command:
   ```sh
   node app.js
   ```
3. **Test the application** by navigating to `http://localhost:3005/movie/Inception` (or any other movie title) in your web browser or using a tool like Postman.

## Additional Information

- **OMDb API Documentation:** [http://www.omdbapi.com/](http://www.omdbapi.com/)
- **Axios Documentation:** [https://axios-http.com/](https://axios-http.com/)

This exercise demonstrates how to set up an Express application to retrieve movie data from the Open Movie Database using Axios. Follow the instructions to create the application, replace the placeholder API key with your own, and test the application by fetching movie data.

