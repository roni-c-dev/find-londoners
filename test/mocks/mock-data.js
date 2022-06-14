const fakeSuccessResponse = {
    status: 200,
    data: {
        "id": 23,
        "first_name": "Ronisendra",
        "last_name": "Collingsworth",
        "email": "rcol@ox.ac.uk",
        "ip_address": "127.179.78.76",
        "latitude": 55.0861,
        "longitude": -1.5808
    }
    
}

// Determined London co-ordinates as given by the job communications
const londonLatLon = {lat: 51.5074, lon: -0.1277}

// My home town which I know is outside of 50 miles from London
const northumberlandLatLon = {lat: 55.0861, lon: -1.5808}

// A location within 50 miles
const stAlbansLatLon = {latitude: 51.7527, longitude: -0.3394};

// Artificial locations to test southern hemisphere
const fakeLocations = [
    {lat: -51.5072, lon: 0.1276},
    {latitude: -51.7527, longitude: -0.3394}
]

const londonUsersArray = [
    {
        "id": 135,
        "first_name": "Mechelle",
        "last_name": "Boam",
        "email": "mboam3q@thetimes.co.uk",
        "ip_address": "113.71.242.187",
        "latitude": -6.5115909,
        "longitude": 105.652983
    },
    {
        "id": 396,
        "first_name": "Terry",
        "last_name": "Stowgill",
        "email": "tstowgillaz@webeden.co.uk",
        "ip_address": "143.190.50.240",
        "latitude": -6.7098551,
        "longitude": 111.3479498
    },
    {
        "id": 520,
        "first_name": "Andrew",
        "last_name": "Seabrocke",
        "email": "aseabrockeef@indiegogo.com",
        "ip_address": "28.146.197.176",
        "latitude": "27.69417",
        "longitude": "109.73583"
    },
    {
        "id": 658,
        "first_name": "Stephen",
        "last_name": "Mapstone",
        "email": "smapstonei9@bandcamp.com",
        "ip_address": "187.79.141.124",
        "latitude": -8.1844859,
        "longitude": 113.6680747
    },
    {
        "id": 688,
        "first_name": "Tiffi",
        "last_name": "Colbertson",
        "email": "tcolbertsonj3@vimeo.com",
        "ip_address": "141.49.93.0",
        "latitude": 37.13,
        "longitude": -84.08
    },
    {
        "id": 794,
        "first_name": "Katee",
        "last_name": "Gopsall",
        "email": "kgopsallm1@cam.ac.uk",
        "ip_address": "203.138.133.164",
        "latitude": 5.7204203,
        "longitude": 10.901604
    },
]
const allUsersArray = [
    {
        "id": 794,
        "first_name": "Katee",
        "last_name": "Gopsall",
        "email": "kgopsallm1@cam.ac.uk",
        "ip_address": "203.138.133.164",
        "latitude": 5.7204203,
        "longitude": 10.901604
    },
    {
        "id": 266,
        "first_name": "Ancell",
        "last_name": "Garnsworthy",
        "email": "agarnsworthy7d@seattletimes.com",
        "ip_address": "67.4.69.137",
        "latitude": 51.6553959,
        "longitude": 0.0572553
    },
    {
        "id": 322,
        "first_name": "Hugo",
        "last_name": "Lynd",
        "email": "hlynd8x@merriam-webster.com",
        "ip_address": "109.0.153.166",
        "latitude": 51.6710832,
        "longitude": 0.8078532
    },
    {
        "id": 554,
        "first_name": "Phyllys",
        "last_name": "Hebbs",
        "email": "phebbsfd@umn.edu",
        "ip_address": "100.89.186.13",
        "latitude": 51.5489435,
        "longitude": 0.3860497
    }
]
const withinFiftyArray = [
    {
        "email": "agarnsworthy7d@seattletimes.com", 
        "first_name": "Ancell", 
        "id": 266,
         "ip_address": "67.4.69.137",
        "last_name": "Garnsworthy",
        "latitude": 51.6553959,
        "longitude": 0.0572553
    }, 
    {
        "email": "hlynd8x@merriam-webster.com", 
        "first_name": "Hugo",
         "id": 322,
        "ip_address": "109.0.153.166",
        "last_name": "Lynd",
        "latitude": 51.6710832,
        "longitude": 0.8078532
    }, 
    {
        "email": "phebbsfd@umn.edu",
        "first_name": "Phyllys",
        "id": 554,
        "ip_address": "100.89.186.13",
        "last_name": "Hebbs",
        "latitude": 51.5489435,
        "longitude": 0.3860497
    },
    {
        "id": 135,
        "first_name": "Mechelle",
        "last_name": "Boam",
        "email": "mboam3q@thetimes.co.uk",
        "ip_address": "113.71.242.187",
        "latitude": -6.5115909,
        "longitude": 105.652983
    },
]

module.exports = {
    fakeSuccessResponse,
    londonLatLon,
    northumberlandLatLon,
    stAlbansLatLon, 
    fakeLocations,
    londonUsersArray,
    allUsersArray,
    withinFiftyArray
}