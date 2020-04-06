// //1. Head over to https://icanhazdadjoke.com/api. Read the documentation...
// 2. Write a Promise that will return a random joke.
// 3. `console.log` the result to read the joke.

// Note: The `request-promise` module accepts a `url` but can also accept an object with various parameters. _You will want to set the Headers to `"Accept": "application/json"`_ [See NPM](https://www.npmjs.com/package/request-promise#get-something-from-a-json-rest-api)


const rp = require('request-promise');

const getDadJoke = async () => {
    try {
        let options = {
            headers: {"Accept": "application/json"},
            uri: 'https://icanhazdadjoke.com/'
        };
        let jokeobj = await rp(options);

        let joke1 = JSON.parse(jokeobj);
        joke1 = joke1.joke;
        
        return joke1;

    } catch (err) {console.log(err)}
}

// getDadJoke().then(data => {console.log(data)});


module.exports = {getDadJoke};