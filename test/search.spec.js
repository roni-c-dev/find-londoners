const axios = require('axios');
const search = require('../api/search');
const mockData =  require('./mocks/mock-data');

jest.mock("axios");

describe("API calls - success", () => {
    beforeEach(() => {
        axios.get.mockImplementation(() => Promise.resolve( 
            { data: mockData.fakeSuccessResponse }));
    });
    test("it should return 200 and result for getAllUsers", async () => {
        var result = await search.getAllUsers();
        expect(result).toBe(mockData.fakeSuccessResponse);
        expect(result.status).toBe(200);
    });
    test("it should return 200 and result for getLondonUsers", async () => {
        var result = await search.getLondonUsers();
        expect(result).toBe(mockData.fakeSuccessResponse);
        expect(result.status).toBe(200);
    });   
})
describe("API calls - error", () => {
    beforeEach(() => {
        axios.get.mockImplementation(() => Promise.reject( 
            { error: '404 Not found' }));
    });
    test("With an incorrect call to get all users ", async () => {
        var result = await search.getAllUsers('/frogspawn');
        expect(result).toBe('404 Not found');
    });

    test("With an incorrect call to get London users", async () => {
        var result = await search.getLondonUsers('frogspawn');
        expect(result).toBe('404 Not found');
    });
})

describe("findUsersWithinDistance", () => {
    test("reduces the array to users within fifty miles of given location", () => {
        var testArray = mockData.allUsersArray;
        var result = search.findUsersWithinDistance(testArray, mockData.londonLatLon);
        expect(result.length).toBe(3);
        expect(result).not.toContain('"first_name": "Katee",');
    })
})

describe("filter and combine users", () => {
    test("should combine users within distance and the london users with no duplicates", () => {
        var londonUsersArray = mockData.londonUsersArray;
        var withinFiftyArray = mockData.withinFiftyArray;
        var result = search.combineUsers(londonUsersArray, withinFiftyArray);
        expect(result.length).toBe(9);
    })

    
})


