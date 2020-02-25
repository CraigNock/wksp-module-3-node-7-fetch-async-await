const request = require('request-promise');

const getGeekJoke = async () => {
    try {
        let joke = await request('https://geek-jokes.sameerkumar.website/api');
        // console.log(joke);
        return joke;
    } catch (err) {console.log(err)}
}

// getGeekJoke().then(data => {console.log(data)});

module.exports = {getGeekJoke};