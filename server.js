'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 8000;

const {getDadJoke} = require('./__workshop/2-promises-in-action/exercise-3');
const {getTronaldDump}= require('./__workshop/2-promises-in-action/exercise-4');
const {getGeekJoke} = require('./__workshop/2-promises-in-action/exercise-5');

let joke = 'beef';


const deliverHandle = async (req, res) => {
    let type = req.body.typeOf;
    console.log(type);
    switch (type) {
        case 'dad':
            joke = await getDadJoke();
            res.send(joke);
            break;
        case 'geek':
            joke = await getGeekJoke();
            res.send(joke);
            break;
        case 'tronald':
            joke = await getTronaldDump();
            res.send(joke);
            break;
    
        default:
            break;
    }
}

express()
    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
	.use(morgan('dev'))
	.use(express.static('public'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(express.urlencoded({extended: false}))
    .set('view engine', 'ejs')

    // endpoints

    .post('/thejoke', deliverHandle)

    .get('/*' , (req, res) => {
        res.send('404');
    })

    .listen(PORT, () => console.log(`Listening on port ${PORT}`));