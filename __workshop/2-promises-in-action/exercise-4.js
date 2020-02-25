//1. Head over to https://docs.tronalddump.io/. Read the documentation...
// 2. Write a Promise that will return a random Tronald Dump quote.
// _I had a hard time actually finding the api endpoint... Here it is:_ https://api.tronalddump.io
// 3. Examine the response to get the right data to return.

const request = require('request-promise');

const getTronaldDump = async () => {
    try{
        let reqOptions = {
            uri: 'https://api.tronalddump.io/random/quote',
            headers: {'Accept': 'application/json'}
        }
        let quoteObj = await request(reqOptions);
        quoteObj = JSON.parse(quoteObj);
        return quoteObj.value;

    } catch (err) {console.log(err)}
}

// getTronaldDump()
//     .then(data => {console.log(data)});

module.exports = {getTronaldDump};