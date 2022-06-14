const express = require('express');
const app = express();
const search = require('./api/search');

app.get('/', async (req, res, err) => {   
    // make call to api 
    
    try {
        const result = await search.filterAndCombineUsers();
        res.status(200).send({
            result
        })
    } catch (err) {   
        res.status(500).send('Failed call')
    }
    
});

module.exports = app
