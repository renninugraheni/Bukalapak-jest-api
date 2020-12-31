const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const epListUsers = param => api.get('api/users')
    .query(param);

module.exports = {
    epListUsers,
};