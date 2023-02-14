var mymap = L.map("map").setView([64.80146, -18.68498], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon12 = L.icon({
    iconUrl: 'images/icon_12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var Reykjavik = L.marker([64.14810, -21.94652], {icon: myIcon1}).bindPopup("<b>Reykjavik").addTo(mymap);
var Faxi = L.marker([64.22611, -20.33878], {icon: myIcon7}).bindPopup("<b>Faxi Waterfall").addTo(mymap);
var nes = L.marker([64.11452,  -21.24526], {icon: myIcon2}).bindPopup("<b>Nesjavellir Geothermal Power Plant").addTo(mymap);
var kerio = L.marker([64.0419, -20.8865], {icon: myIcon3}).bindPopup("<b>Kerio Crater").addTo(mymap);
var cathedral = L.marker([64.12599, -20.52438], {icon: myIcon4}).bindPopup("<b>Skalholt Cathedral").addTo(mymap);
var lagoon = L.marker([64.1374, -20.3096], {icon: myIcon5}).bindPopup("<b>Secret lagoon").addTo(mymap);
var greenhouse = L.marker([64.17752, -20.44489], {icon: myIcon6}).bindPopup("<b>Fridheimar Greenhouse").addTo(mymap);
var gullfoss = L.marker([64.31816, -20.10901], {icon: myIcon8}).bindPopup("<b>Gullfoss").addTo(mymap);
var geysir = L.marker([64.3097, -20.3027680], {icon: myIcon9}).bindPopup("<b>Strokkur Geysir").addTo(mymap);
var bruarfoss = L.marker([64.2406, -20.5245], {icon: myIcon10}).bindPopup("<b>Bruarfoss").addTo(mymap);
var fontana = L.marker([64.21479, -20.73023], {icon: myIcon11}).bindPopup("<b>Laugarvatn Fontana").addTo(mymap);
var thing = L.marker([64.2557, -21.1292], {icon: myIcon12}).bindPopup("<b>Thingvellir National Park").addTo(mymap);