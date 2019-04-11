const request = require('supertest');
const server = require('./server.js');

// testing endpoints
//returns correct http status code

describe('server.js', () => {
  describe('GET /', () => {
    it.skip('should respond with 200 OK', () => {
      return request(server).get('/').then(response => {      //this is the supertest library syntax
        expect(response.status).toBe(200);                    // you must use return keyword or it will give a false positive (passing test) because it is async function
      })
    })

    // async await style (MY FAVORITE)
    it('should respond with 200 OK', async () => {
      const response = await request(server).get('/')
      expect(response.status).toBe(200);
    })

    //done function style
    it.skip('should respond with 200 OK done', done => {
      request(server).get('/').then(response => {
        expect(response.status).toBe(200);
        done();
      })
    })

    it('should respond with 200 OK', () => {
      return request(server).get('/').expect(200);    // Shorter syntax (for status codes)
    })

    it('should return JSON', () => {
      return request(server).get('/').then(res => {
        expect(res.type).toBe('application/json')
      })
    })

    it('should return { api: "up" }', () => {
      return request(server).get('/').then(res => {
        expect(res.body).toEqual({ api: 'up' });
      })
    })
  })
})