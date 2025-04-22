const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio'); //Cheerio is a fast, flexible, and lean implementation of jQuery designed specifically for server-side use. It provides a way to parse and manipulate HTML and XML in Node.js, making it easy to traverse and extract data from web pages.


const app = express();
const port = 3000;

app.get('/metadata', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL parameter is required');
    }

    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        const metadata = {};

        $('meta').each((i, elem) => {
            const name = $(elem).attr('name') || $(elem).attr('property');
            const content = $(elem).attr('content');
            if (name && content) {
                metadata[name] = content;
            }
        });
        let table = '<table border="1"><tr><th>Key</th><th>Value</th></tr>';
        for (const [key, value] of Object.entries(metadata)) {
            table += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }
        table += '</table>';

        res.send(table);
        res.end();
    } catch (error) {
        res.status(500).send('Error fetching metadata');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
