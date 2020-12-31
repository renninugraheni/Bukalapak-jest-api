const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const postListUsers = body => api.post('api/users')
    .send(body);

module.exports = {
    postListUsers,
};