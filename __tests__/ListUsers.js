const epPosts = require('../endpoints/epPosts');
const schema = require('../schema/schemaPosts');

const { matchers } = require('jest-json-schema');

expect.extend(matchers);

describe('test api list users', () => {
    test('user can get list users', async () => {
        const response = await epPosts.epPosts;
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSchema(schema.schema);
        expect(response.body).toMatchSnapshot();
    });
});