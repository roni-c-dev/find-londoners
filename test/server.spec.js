const app = require('../server');
const supertest = require('supertest');

test('api test - success', async () => {
    // success - what should the API work with?
    await supertest(app).get("/")
    .expect(200)
    .then((response) => {
        expect(response.body).toBeDefined();
        expect(typeof(response.body)).toBe('object');
    });
});

test('api test - incorrect route', async () => {
    // failure - scenarios that would not work
    await supertest(app).get("/blob")
    .expect(404)
    .then((response) => {
        expect(response.error).toBeDefined();
        expect(typeof(response.error)).toBe('object');
        expect(response.status).toBe(404)
    });
});

test("API test - incorrect verb", async () => {
    // incorrect verb
    await supertest(app).post("/")
    .expect(404)
    .then((response) => {
        expect(response.error).toBeDefined();
        expect(typeof(response.error)).toBe('object');
        expect(response.status).toBe(404)
    });
    
})