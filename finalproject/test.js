var mymap = L.map('map', {
    center:[6.794952075439587, 20.91148703911037],
        zoom: 3,
});

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

//scalebar
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap);
// Create menu items

var baseLayers = {
    'Streets': streets,
	};


 var migrationLayer = new L.migrationLayer({
            map: mymap,
            data: emi,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10});
migrationLayer.addTo(mymap);


 var migrationLayer2 = new L.migrationLayer({
            map: mymap,
            data: imm,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10});
migrationLayer2.addTo(mymap);

var cities = L.geoJson(city, {
     style: function (feature) {
        return { color: '#de2d26', weight: 0.8};
    },
    onEachFeature: function(feature, featureLayer) {
        featureLayer.bindTooltip(feature.properties.NAME, {permanent: false, direction: 'right'});
    }
}).addTo(mymap);



function hide_emi(){
    migrationLayer.hide();
}
function show_emi(){
    migrationLayer.show();
}

function hide_imm(){
    migrationLayer2.hide();
}
function show_imm(){
    migrationLayer2.show();
}


//Pop-up for showing XY coordinates on map
//// Create an empty popup
var popup = L.popup();
            
//// Function to set popup contents
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
        "You clicked the map at -<br>" + 
        "<b>long:</b> " + e.latlng.lng + "<br>" + 
        "<b>lat:</b> " + e.latlng.lat
    ).openOn(mymap);}

//// Add event listener for click events to show lat long on the map
mymap.addEventListener("click", onMapClick);

// Add Navigation Buttons
L.easyButton(('<img src="images/globe_icon.png", height=85%>'), function(btn, map){
    map.setView(coords[53], 3);

}).addTo(mymap);



