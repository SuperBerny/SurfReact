let axios = require('axios');

const coordsArr = [];

axios.get('http://api.spitcast.com/api/spot/all')
    .then(function(response) {
        // console.log(response);
    })
    .then(function(response) {
        console.log(coordsArr);
        coordsArr.push(response);
    })
    .catch(function(error) {
        console.log(error);
    });

console.log('--------------');
console.log(coordsArr);