const epPosts = require('../endpoints/epPosts');

describe('test api list users', () => {
    test('user can get list users', async () => {
        const response = await epPosts.epPosts;
        console.log(response);
        expect(response.status).toEqual(200);
        // expect(response.body).toMatchSnapshot();
    });
});