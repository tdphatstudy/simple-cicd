const request = require('supertest');
const app = require('./app');

describe('POST /add', () => {
  it('should return the correct result when a and b are numbers', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 3, b: 5 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  it('should return an error if a or b is not a number', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 'abc', b: 5 });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('a and b must be numbers');
  });
});
