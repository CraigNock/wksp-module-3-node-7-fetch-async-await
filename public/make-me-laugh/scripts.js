// nothing here yet...

const submitHandle = (event) => {
    event.preventDefault();
    console.log('submit');
    let typeOf = {typeOf :type.value};

    fetch('/thejoke', {
        method: 'POST',
        body: JSON.stringify(typeOf),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(joke => joke.text())
        .then(joke => {
        let jokeBox = document.querySelector('#jokeBox')
        jokeBox.innerText = `${joke}`;
        })
    
    
}

