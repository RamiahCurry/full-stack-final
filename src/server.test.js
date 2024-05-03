// server.test.js
const request = require('supertest');
const app = require('./server'); // Make sure to export your Express app

describe('POST /login', () => {
  it('should login successfully with correct credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: 'admin',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Login successful');
  });

  it('should fail to login with incorrect credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: 'admin',
        password: 'wrongpassword'
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual('Login failed');
  });
});
