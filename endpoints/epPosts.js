const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const epPost = (data) => api.post('/posts')
    .set('Content-Type', 'application/json')
    .set('Accept', '*/*')
    .send(data)


const epGet = api.get('/posts')
    .set('Content-Type', 'application/json')
    .set('Accept', '*/*')

module.exports = {
    epPost,
    epGet,
};