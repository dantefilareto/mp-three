const express = require('express');
const mpService = require('./mp-service');
const app = express(); 
const port = 5000;

const prefIds = mpService.init();
app.get('/', (req, res) => {
    res.sendFile('index.html?pref1=', {root: `${__dirname}/html`});                                       
});
app.listen(port, () => {          
    console.log(`Now listening on port ${port}`); 
});
