const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async(req, res)=>{

    res.status(200).send({message: 'Hello World'})

});

app.listen(3000);