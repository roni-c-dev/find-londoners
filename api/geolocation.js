const geo = require('geolocation-utils');

function calculateDistanceFromLocation (firstLatLon, userLatLon) {
    return convertMetresToMiles(geo.distanceTo(firstLatLon, userLatLon));
}

function convertMetresToMiles (metres) {
    return metres * 0.000621371 
}

function isWithinFiftyMiles (firstLatLon, secondLatLon) {
    return (calculateDistanceFromLocation(firstLatLon, secondLatLon) <= 50)
}

module.exports = {
    calculateDistanceFromLocation,
    convertMetresToMiles, 
    isWithinFiftyMiles
}