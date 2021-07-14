// the map argument refers to the map which we create using Leaflet
function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng,];
}

let singapore = [ 1.35,103.84]; // #1 Singapore latlng
let map = L.map('map').setView(singapore, 12); // #2 Set the center point: 'map' is id of map element
map.setMaxBounds(map.getBounds()); // fix map boundary
map.setMinZoom(12); // fix minimum zoom level

//let london = [51.50, 0.12];
//let map = L.map('map').setView(london, 11); // 2nd param is the zoom level

// setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// create marker cluster
// let markerClusterLayer = L.markerClusterGroup();

// for (let i = 0; i < 1000; i++) {
//     let pos = getRandomLatLng(map);
//     L.marker(pos).addTo(markerClusterLayer);
// }

// add it to the map
// markerClusterLayer.addTo(map);


let group= L.layerGroup(); // 1. create the layer group
L.marker(getRandomLatLng(map)).addTo(group);  // 2. add markers to the group
L.marker(getRandomLatLng(map)).addTo(group);
L.marker(getRandomLatLng(map)).addTo(group);

// 1st group layer
// add the group layer to the map
group.addTo(map); // 3. add the layer to the map

// 2nd group layer
let group2 = L.layerGroup();
for (let i = 0; i < 5; i++) {
    L.circle(getRandomLatLng(map), {
        color: 'red',
        fillColor:"orange",
        fillOpacity:0.5,
        radius: 500
    }).addTo(group2);
}

// 3rd group layer
let group3 = L.layerGroup();
for (let i = 0; i < 5; i++) {
    L.circle(getRandomLatLng(map), {
        color: 'blue',
        fillColor:"green",
        fillOpacity:0.5,
        radius: 250
    }).addTo(group3);
}

// only can have 1 base layer
// let baseLayers ={
//     'Markers': group,
//     'Circles': group2
// }

// can have many overlays
// let overlays = {
//     'Green Circle':group3
// }

// add control button
// L.control.layers(baseLayers, overlays).addTo(map);

// document.querySelector('#toggle-btn').addEventListener('click', function(){
//     // use hasLayer() to check if the map already have the shopping layer group
//     // reminder: group2 contains all the circles
//     if (map.hasLayer(group2)) {
//         map.removeLayer(group2);
//     } else {
//             map.addLayer(group2);
//     }
// })

let hdbLayer = L.layerGroup();
async function getHDBLayer() {
    let response = await axios.get("data/hdb.json");
    console.log("Running getHDBLayer");
    for (let obj of response.data) {
        const {name, coordinates} = obj;
        L.circle(coordinates, {
            color: 'green',
            fillColor:"orange",
            fillOpacity:0.5,
            radius: 500
        }).bindPopup(`<p>${name}</p>`).addTo(hdbLayer);
    }
    return;
}

let natureLayer = L.layerGroup();
async function getNatureLayer() {
    let response = await axios.get("data/nature.json");
    console.log("Running getNatureLayer");
    for (let obj of response.data) {
        const {name, coordinates} = obj;
        L.circle(coordinates, {
            color: 'purple',
            fillColor:"green",
            fillOpacity:0.5,
            radius: 1000
        }).bindPopup(`<p>${name}</p>`).addTo(natureLayer);
    }
    return;
}

let mallLayer = L.layerGroup();
async function getMallLayer() {
    let response = await axios.get("data/malls.json");
    console.log("Running getMallLayer");
    for (let obj of response.data) {
        const {name, coordinates} = obj;
        L.marker(coordinates).bindPopup(`<p>${name}</p>`).addTo(mallLayer);
    }
    return;
}

async function addMapLayers() {
    await getHDBLayer();
    await getNatureLayer();
    await getMallLayer();
    console.log("Before layer is added");
    let baseLayers = {
        'Markers': group,
        'Circles': group2,
        'HDB': hdbLayer,
        'Malls': mallLayer
    }
    let overlays = {
        'Green Circle': group3,
        'Nature': natureLayer
    }

    L.control.layers(baseLayers, overlays).addTo(map);
    console.log("After layer controls have been added");
}

// to group up all async/await functions
window.addEventListener('DOMContentLoaded', async (event) => {
    // setup event listeners here
    await addMapLayers();
    console.log("After map layer is done");
})

// adding marker
// let singaporeMarker = L.marker([1.29, 103.85]);
// singaporeMarker.addTo(map);
// singaporeMarker.bindPopup("<p>Singapore</p>")

// singaporeMarker.addEventListener('click', function(){
//     alert("Singapore");
// })

// circle marker
// let circle = L.circle([1.35166526, 103.773663572], {
//     color: 'red',
//     fillColor:"orange",
//     fillOpacity:0.5,
//     radius: 500
// })

// add it to the map
// circle.addTo(map);

// let zooMarker = L.marker([1.404, 103.793]);
// zooMarker.addTo(map).bindPopup("<p>Singapore Zoo</p>");

// let birdParkMarker = L.marker([1.318, 103.706]);
// birdParkMarker.addTo(map).bindPopup("<p>Jurong Bird Park</p>");

// let discoveryMarker = L.marker([1.332, 103.678]);
// discoveryMarker.addTo(map).bindPopup("<p>Singapore Discovery Center</p>");

async function addCyclingLayer() {
    let response = await axios.get("data/cycling-path.geojson");
    let cyclingLayer = L.geoJson(response.data, {
        onEachFeature: function(feature, layer) {
            console.log(feature);
            //layer.bindPopup(feature.properties.Description);
            let e = document.createElement('div');
            e.innerHTML = feature.properties.Description;
            let tds = e.querySelectorAll('td');
            // for (let td of tds) {
            //     console.log(td.innerText);
            // }
            let region = tds[0].innerHTML;
            let department = tds[1].innerHTML;
            layer.bindPopup(`<div>
                <p>
                    Region: ${region}
                </p>
                <p>
                    Department: ${department}
                </p>
            </div>`);
        }
    }).addTo(map);

    cyclingLayer.setStyle({
        'color':'red'
    });
}

async function addTracksLayer() {
    response = await axios.get("data/nparks-tracks.geojson");
    let tracksLayer = L.geoJson(response.data, {
        onEachFeature: function(feature, layer) {
            //layer.bindPopup(feature.properties.Description);
            let e = document.createElement('div');
            e.innerHTML = feature.properties.Description;
            let tds = e.querySelectorAll('td');
            let park = tds[0].innerHTML;
            let type = tds[1].innerHTML;
            layer.bindPopup(`<div>
                <p>
                    Park: ${park}
                </p>
                <p>
                    Type: ${type}
                </p>
            </div>`);
        }
    }).addTo(map);

    tracksLayer.setStyle({
        'color':'green'
    });
}

addCyclingLayer();
addTracksLayer();


// alternate search
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const geocoder = L.Control.geocoder({
    // fix location to SG
    geocoder: L.Control.Geocoder.nominatim({
        geocodingQueryParams: {countrycodes: 'SG'}
    }),
    defaultMarkGeocode: false,
}).addTo(map);

let searchLocation;
geocoder.on('markgeocode', function(e) {
    // remove previous searches
    if (searchLocation) {
        map.removeLayer(searchLocation);
    }
    const latlng = e.geocode.center;
    searchLocation = L.marker(latlng).addTo(map);
    map.fitBounds(e.geocode.bbox);
  })
  .addTo(map);
