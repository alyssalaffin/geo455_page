var mymap = L.map('map', {
    center: [51.48882027639122, -0.1028811094342392],
              zoom: 11
          });

var grayscale = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 11,
   minZoom: 5
 }).addTo(mymap);
    
//functions
function getColor(value) {
    return value > 139 ? '#54278f':
           value > 87  ? '#756bb1':
           value > 53  ? '#9e9ac8':
           value > 32  ? '#cbc9e2':
                         '#f2f0f7';
}
function style(feature){
    return {
        fillColor: getColor(feature.properties.pop_den),
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
    }
  
function highlightFeature(e) {
    var feature = e.target;

    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}
    
function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature, 
            mouseout: resetHighlight,    
        });
    }

    var geojson; // define a variable to make the geojson layer accessible for the funtion to use   

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }

    geojson = L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);

//ledgend

  var legend = L.control({position: 'bottomright'}); 

    legend.onAdd = function (mymap) {

        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 32, 53, 87, 139]; 

        div.innerHTML = '<b>Population Density <br></b>'; 

        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(mymap);

//New Map

function getColor1(value1) {
    return value1 > 47 ? '#ff1a8c':
           value1 > 30 ? '#ff4da6':
           value1 > 17 ? '#ff80bf':
           value1 > 13 ? '#ffb3d9':
           value1 > 11 ? '#ffe6f2':
                        '#f2f0f7';
}
function style1(feature){
    return {
        fillColor: getColor1(feature.properties.density),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}
function highlightFeature1(e1) {
    var feature = e1.target;

    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

function onEachFeature1(feature, layer) {
    layer.on({
        mouseover: highlightFeature1, // Do what defined by the highlightFeature function on mouseover
        mouseout: resetHighlight1,    // Do what defined by the resetHighlight function on mouseout
    });
}

var density; // define a variable to make the geojson layer accessible for the function to use   
            
function resetHighlight1(e1) {
    density.resetStyle(e1.target);
}


density = L.geoJson(density, {
    style:style1,
    onEachFeature: onEachFeature1
}).bindPopup(function (layer){
    return layer.feature.properties.name
           + '<p style="color:purple">' + layer.feature.properties.density.toString() + ' people/hectare </p>';       
}).addTo(mymap);

var legend1 = L.control({position: 'bottomleft'});

legend1.onAdd = function (mymap) {
    
    var div = L.DomUtil.create('div', 'legend'),
    grades = [0, 11, 13, 17, 30, 47];
    
    div.innerHTML = '<b> English Speaking Households <br></b>';
    
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
               '<i style="background:' + getColor1(grades[i] + 1) + '"></i>' + grades[i] + (grades[i +1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    
    return div;
};
legend1.addTo(mymap)

// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    };

var overlays = {
    'Population Denisty': geojson,
    'Language': density,
               };

//Create the menu
 var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);
