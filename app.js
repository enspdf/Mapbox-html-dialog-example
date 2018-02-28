//globals
var apiKey = "pk.eyJ1Ijoic2hhY2tveCIsImEiOiJjaXJpMTE0d3owMXo3ZzFucmJpNXF4Z2I4In0.07oyj48TxGjTuTDOgk8Fcg";
var mapCenter = [36.308056, -87.949444]

L.mapbox.accessToken = apiKey;

var map = L.mapbox.map('map', 'mapbox.light',{
  zoomControl: true
}).setView([mapCenter[0], mapCenter[1]], 9);

// Disable drag and zoom handlers.
map.dragging.disable();
map.touchZoom.disable();
// map.doubleClickZoom.disable();
// map.scrollWheelZoom.disable();
// map.keyboard.disable();

// Add Feature Layer to map
var markers = L.mapbox.featureLayer().addTo(map);

// Initialize geoJson Data
var geoJson = [{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-87.949444, 36.308056]
  },
  properties: {
    title: 'Benton-Houston Ferry',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: 'Some Random text',
    'water': true,
    'outdoor': true,
    'civil': false,
    'wildlife': true,
    'heritage': false,
    'marker-color': '#94a748'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-88.047624, 35.969574]
  },
  properties: {
    title: 'Birdsong Resort, Marina, and Campground',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: '<h1>Some Random text</h1>',
    'water': true,
    'outdoor': false,
    'civil': false,
    'wildlife': true,
    'heritage': true,
    'marker-color': '#94a748'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-87.97416, 36.08868]
  },
  properties: {
    title: 'Nathan Bedford Forrest State Park',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: 'Some Random text',
    'water': true,
    'outdoor': true,
    'civil': true,
    'wildlife': true,
    'heritage': false,
    'marker-color': '#94a748'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-87.997892, 36.060605]
  },
  properties: {
    title: 'Nathan Bedford Forrest State Park, Eva Beach Day Use Area',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: 'Some Random text',
    'water': true,
    'outdoor': false,
    'civil': false,
    'wildlife': true,
    'heritage': true,
    'marker-color': '#94a748'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-88.040368, 35.612822]
  },
  properties: {
    title: 'Beech Bend Campground',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: 'Some Random text',
    'water': true,
    'outdoor': false,
    'civil': false,
    'wildlife': false,
    'heritage': false,
    'marker-color': '#94a748'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-88.240664, 35.052063]
  },
  properties: {
    title: 'Pickwick Landing State Park',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: 'Some Random text',
    'water': true,
    'outdoor': false,
    'civil': true,
    'wildlife': true,
    'heritage': false,
    'marker-color': '#94a748'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-88.193049, 35.070611]
  },
  properties: {
    title: 'Pickwick Landing State Park, Bruton Branch Recreation Area Campground',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: 'Some Random text',
    'water': true,
    'outdoor': true,
    'civil': false,
    'wildlife': true,
    'heritage': true,
    'marker-color': '#94a748'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-88.23479300000001, 35.052419]
  },
  properties: {
    title: 'Pickwick Landing State Park Marina',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: 'Some Random text',
    'water': true,
    'outdoor': true,
    'civil': false,
    'wildlife': false,
    'heritage': false,
    'marker-color': '#94a748'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-88.20159, 35.354458]
  },
  properties: {
    title: 'Saltillo Landing and Marina',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: 'Some Random text',
    'water': true,
    'outdoor': false,
    'civil': false,
    'wildlife': true,
    'heritage': false,
    'marker-color': '#94a748'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-88.293174, 35.355906]
  },
  properties: {
    title: 'White Oak Wildlife Management Area',
    address: '1234 Fake Street, Somewhere, TN 38888',
    description: 'Some Random text',
    'water': true,
    'outdoor': false,
    'civil': false,
    'wildlife': true,
    'heritage': false,
    'marker-color': '#94a748'
  }
}];

markers.setGeoJSON(geoJson);

// Listener for marker click
markers.on('click', function(e) {
  // Force close the popup.
  e.layer.closePopup();

  let feature = e.layer.feature;
  let title = feature.properties.title;
  let content = feature.properties.description;
  let latlng = feature.geometry.coordinates;

  // Modal Content
  $("#marker_title").text(title);
  $("#marker_content").html(content);
  $("#marker_latlng").text(formatLatLng(latlng));

  $('#exampleModal').modal('show');
});

// Filter click event
$('.menu-ui a').on('click', function() {
  var filter = $(this).data('filter');
  $(this).addClass('active').siblings().removeClass('active');
  markers.setFilter(function(f) {
    return (filter === 'all') ? true : f.properties[filter] === true;
  });
  return false;
});

// Clear Modal Data
function empty() {
  // TODO: Clear Modal when Modal is closed for next marker clicked
}

// Formats Latitude and Longitude for Modal
function formatLatLng(latlng) {
  // TODO: Format Latitude and Longitude
  return latlng;
}