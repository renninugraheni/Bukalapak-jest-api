const epListUsers = require('../endpoints/epListUsers');

describe('test api list users', () => {
    test('user can get list users at page 2',async () => {
        const queryParam = {
            page: 2,
        };
        const response = await epListUsers.epListUsers(queryParam);
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSnapshot();
    });
});