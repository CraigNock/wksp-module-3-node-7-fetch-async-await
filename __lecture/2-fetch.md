# 3.7.2 - fetch()

---

- `fetch()` is a JavaScript (but not in NodeJS) Promise-based function.
- It's mainly used to
    - `GET` from somewhere
    - `POST` data somewhere

The syntax is very similar to Promises.
Fetch used only at the frontend.

---

### `GET`

```js
        //remember always needs to send back a status 200(dandy), 300s(?), 400s(errors), 500s(server errors)

fetch('<URL>')
    .then(res => {
        // if response is successful
            // do something.
        // else
            // do something else.
        // you can return something to another .then, or not...
    })
    .then()
    .catch() // you can also catch errors!
```

---

### `POST

```js
//if no object put, get is the asumed method.
fetch('<URL>', {
        method: 'POST', // (optional) for `GET`
        mode: '',       // (optional) no-cors, *cors, same-origin
        cache: '',      // (optional) no-cache, reload, force-cache, only-if-cached
        credentials: '',// (optional) include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json' // (optional) but we will use it. (often/always)
            // (optional) other options / parameters that can be set here.
            },
        body: JSON.stringify({ // good practice to stringify, even if not always required.
            // the data that you want to send to the server. (req.body)
        })
    })
    .then(res => {
        // do stuff
    });
```

---

[Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---

## Now on to [Insomnia](https://insomnia.rest/download/)

[Getting started](https://support.insomnia.rest/category/9-getting-started)

---