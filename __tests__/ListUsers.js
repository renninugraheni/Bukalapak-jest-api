const ep = require('../endpoints/epPosts');
const data = require('../data/data');
const schema = require('../schema/schemaPosts');

const { matchers } = require('jest-json-schema');

expect.extend(matchers);

describe('test api list users', () => {
    test('user can get list users', async () => {
        const response = await ep.epGet;
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSchema(schema.schema);
        expect(response.body).toMatchSnapshot();
    });
    test('user can create post users', async () => {
        const response = await ep.epPost(data.dataPost);
        console.log(response.body);
        expect(response.status).toEqual(201);
        expect(response.body).toMatchSchema(schema.schemaCreate);
        expect(response.body).toMatchSnapshot();
    });
});