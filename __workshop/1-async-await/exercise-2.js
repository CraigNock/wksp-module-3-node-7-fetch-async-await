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
// }; NO NEED FOR AWAITS, READ THE QUESTION

const doublesLater = (num) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num*2);
        }, 2000);
    });
};

doublesLater(2)
    .then((data) => {console.log(data)});


    // function addPromise(num){
    //     return new Promise(resolve => {
    //         doubleAfter2Seconds(10)
    //             .then((a) => {
    //                 doubleAfter2Seconds(20)
    //                     .then((b) => {
    //                         doubleAfter2Seconds(30).then((c) => {
    //                             resolve(num + a + b + c);
    //                         })
    //                 })
    //         })
    //     });
    // }

const addPromise = async (num) => {
    try {
        let sum = num;
        sum += await doublesLater(10);
        sum += await doublesLater(20);
        sum += await doublesLater(30);
//this is returning a promise, not just a value. Important maybe for promise interactions.
        return new Promise(resolve => {resolve(sum)}); 
    } catch (err) {console.log(err)}
}




    addPromise(10).then((sum) => {
        console.log(sum);
    });