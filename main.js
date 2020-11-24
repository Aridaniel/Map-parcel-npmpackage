


// Get the leafet dependency
const L = require('leaflet')
var mymap = L.map('mapid').setView([64.128288, -21.827774], 13);

/* Link from the Leaflet website that */

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXJpZGFuMTIzIiwiYSI6ImNraHZ4YWRkNDFidjMycXBpZ2p4ZzU4OWsifQ.p6Svfe7UolPFjttVaK-FBQ'
}).addTo(mymap);



/* import maprexti variable from maphi, not reallt besat functional programming but decided just to through it in there */

import maptexti from './maphi'

maptexti()