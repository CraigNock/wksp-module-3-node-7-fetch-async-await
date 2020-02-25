// Exercise 2
// ----------
//returns a new Promise that doubles a num after 2 seconds.

// const doublesLater = async (num) => {
//     try {
//         await setTimeout((num) => {
//             let dubs = num*2;
//             return dubs;
//         }, 2000);
//         // return dubs;
//     } catch (err) {console.log(err)}
// };

const doublesLater = (num) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num*2);
        }, 2000);
    });
};

doublesLater(2)
    .then((data) => {console.log(data)});