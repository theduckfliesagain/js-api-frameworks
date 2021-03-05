const request = require('supertest');
const server = require('../server.js');

describe('API server', () => {
    let api;
    let testMeal = {
        name: 'Pepperoni pizza',
        price: 4.50,
    };

    beforeAll(() => {
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /meals with status 200', (done) => {
        request(api).get('/meals').expect(200, done);
    });

    it('responds to post /meals with status 201', (done) => {
        request(api)
            .post('/meals')
            .send(testMeal)
            .expect(201)
            .expect({ id: 4, ...testMeal }, done);
    });

    it('retrieves a meal by id', (done) => {
        request(api)
            .get('/meal/2')
            .expect(200)
            .expect({ id: 2, name: 'Cheeseburger', price: '£11.00' }, done);
    });

    it('responds to a unknown meal id with a 404', (done) => {
        request(api).get('/meal/42').expect(404).expect({}, done);
    });

    it('responds to delete /meals/:id with status 204', async () => {
        await request(api).delete('/meals/4').expect(204);

        const updatedMeals = await request(api).get('/meals');

        expect(updatedMeals.body.length).toBe(3);
    });

    it('responds to updating data for a meal with 200', (done) => {
        request(api).patch('/meals/2', {price: 5.00}).expect(404, done);
    })

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/discounts').expect(404, done);
    });

    it('responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });
});