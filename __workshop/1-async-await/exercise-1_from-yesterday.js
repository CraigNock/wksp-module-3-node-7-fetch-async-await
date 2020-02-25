// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    try{ 
        let info = await rp('http://api.open-notify.org/iss-now.json');
        info = await JSON.parse(info);
        let obj = {
            lat: info.iss_position.latitude,
            lng: info.iss_position.longitude
        };
        // console.log(obj);
        return obj;
    } catch (err) {console.log(err)}
};

getIssPosition()
    .then(data => {console.log(data)});


// function getIssPosition() {
//     return rp('http://api.open-notify.org/iss-now.json')
//         .then(info => {
//             let issInfo = JSON.parse(info);
//             let obj = {
//                 lat: issInfo.iss_position.latitude,
//                 lng: issInfo.iss_position.longitude
//             };
//             // console.log(obj);
//             return obj;
//         })
// }