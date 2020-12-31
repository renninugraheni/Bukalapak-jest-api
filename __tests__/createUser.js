const epCreateUser = require('../endpoints/epPostUser');
const body = require('../data/dataCreateUser');

describe('test api post user', () => {
    test('test create user', async () => {
        const response = await epCreateUser.postListUsers(body.bodyCreateUser);
        expect(response.status).toEqual(201);
        expect(response.body).toMatchSnapshot();
    });
});