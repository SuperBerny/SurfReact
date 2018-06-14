var mymap = L.map('mapid').setView([33.0338239,-117.2907376], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYnJpYW5wYXRyaWNrIiwiYSI6ImNqaWV1ZXZ5ajBndjM0MW9jdDFseW0wMnIifQ.SZfb6_fwjzTpA1bSegppJg'
}).addTo(mymap);


const submit = document.querySelector('.coordSearch');
function searchCoords(lat,lng) {
    let lat = document.getElementById('lat');
    let lng = document.getElementById('long');

    lat = lat.value;
    lng = lng.value;

    console.log("Lat= " + lat + " Long= " + lng);

}

submit.addEventListener('click', function(e) {
    e.preventDefault();

    const coordsArr = [];

    let lat = document.getElementById('lat').value;
    let lng = document.getElementById('long').value;

    console.log("Lat= " + lat + " Long= " + lng);

    coordsArr.push(lat,lng);

    console.log(coordsArr);

});

