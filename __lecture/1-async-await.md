# 3.7.1 - Async / Await

---

<blockquote>
    Async/Await is a long anticipated JavaScript feature that makes working with asynchronous functions much more _enjoyable_ and _easier to understand_.
    - It is built on top of Promises
    - is compatible with all existing Promise-based APIs.
</blockquote>

---

```js
const newPauseFunction = (sec) => {
    return new Promise(function(resolve) {
        console.log(`${sec}s pause`);
        setTimeout(() => resolve('resolved'), sec * 1000);
    });
}

newPauseFunction(1)
    .then(() => newPauseFunction(2))
    .then(() => newPauseFunction(3))
    .then(() => newPauseFunction(3))
    .then(data => console.log(data)); //prints 'resolved'



//rewrite
// code will not move past await until resolved( like a .then) just clearer
const doIt = async () => {
    await newPauseFunction(1); 
    await newPauseFunction(2);
    await newPauseFunction(3);
    await newPauseFunction(3);
    console.log('no more "awaits" now!');
}

doIt();

const varib = await (somefunction()) //will wait until resolved and assigned to variable before proceeding with rest of code

const doIt = async () => {
    let data = await newPauseFunction(1); 
    data = await newPauseFunction(data);
    data = await newPauseFunction(data);
    await newPauseFunction(data);
    console.log('no more "awaits" now!');
}

doIt();

```

_let's convert it to async/await_

---

### Exercise

Convert the following to async/await

```js
transformText(string)
    .then((str) => allCaps(str))
    .then((str) => trimFirst(str))
    .then((str) => trimLast(str))
    .then((str) => replaceWithX(str))
    .then((str) => {
        console.log(str);
        return str;
    })
    .catch((err) => console.log(err));


const conversion = async (string) => {
    try {
        let data = await transformText(string);
        data = await allCaps(data);
        data = await trimFirst(data);
        data = await trimLast(data);
        data = await replaceWithX(data);
        console.log(data);
        return data;
    } catch (err) {console.log(err)}
}

conversion();

```

---

## Error Handling

As much as possible, you should wrap your `await`(s) inside of a `try/catch` block.

### Example

```js
const asyncPause = async () => {
    try {
        console.log('Go');
        await newPauseFunction(1);
        await newPauseFunction(2);
        await newPauseFunction(3);
        await newPauseFunction(3);
        console.log('Stop');
    } catch (err) { console.log(err) }
}
asyncPause();
```

---