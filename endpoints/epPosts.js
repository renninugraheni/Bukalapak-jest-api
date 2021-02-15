const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const epPosts = api.get('/posts')
    .set('Content-Type', 'application/json')
    .set('Accept', '*/*')

module.exports = {
    epPosts,
};