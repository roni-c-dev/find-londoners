const geolocation = require('../api/geolocation');
const mockData =  require('./mocks/mock-data');

test("calculate distance from location", () => {
    var result = geolocation.calculateDistanceFromLocation(mockData.londonLatLon,  mockData.northumberlandLatLon);
    expect(result).toBe(254.71117093396361);
});

test("convert metres to miles", () => {
    var result = geolocation.convertMetresToMiles(100);
    expect(result).toBe(0.0621371);
})

describe('isWithinFiftyMiles', () => {
    test("should return false for a location outside of fifty mile radius", () => {
        var result = geolocation.isWithinFiftyMiles(mockData.northumberlandLatLon, mockData.londonLatLon);
        expect(result).toBe(false)
    })
    test("should return false for location over 50 miles in southern hemisphere", () => {
        var result = geolocation.isWithinFiftyMiles(mockData.fakeLocations[0], mockData.londonLatLon)
    })
    test("should return true for a location inside of fifty mile radius", () => {
        var result = geolocation.isWithinFiftyMiles(mockData.stAlbansLatLon, mockData.londonLatLon);
        expect(result).toBe(true)
    })
    test("should return true within 50 miles in southern hemisphere", () => {
        var result = geolocation.isWithinFiftyMiles(mockData.fakeLocations[0], mockData.fakeLocations[1]);
        expect(result).toBe(true)
    })
    test("return true for a location with the same reference", () => {
        var result = geolocation.isWithinFiftyMiles(mockData.londonLatLon, mockData.londonLatLon);
        expect(result).toBe(true)
    })

    // Normally would test for a point directly on boundary
    // but this is much more difficult to achieve with grid reference and conversion
    
})
