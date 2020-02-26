// nothing here yet...

const submitHandle = (event) => {
    event.preventDefault();
    console.log('submit');
    let typeOf = {typeOf :type.value}; // or target with get elementbyid.value on the input
    /// 
    fetch('/thejoke', {
        method: 'POST',
        body: JSON.stringify(typeOf),
        headers: {
            "Content-Type": "application/json" //what it is sending
            //'Accept' : 'application/json'  //dictates what it will accept as the reply
        } 
    })
        //or? .then(json.parse(joke))??
        .then(joke => joke.text())
        .then(joke => {
            //check status? should add this
            //if '200' render the joke
            let jokeBox = document.querySelector('#jokeBox')
            jokeBox.innerText = `${joke}`;
        })
}


/// status thingy look into (.status is a method of res)
//res.status(200).send(status: 200, data : bleh)
