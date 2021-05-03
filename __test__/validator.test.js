'use strict';

const superTest = require('supertest');
const server = require('../src/server');
const serverRequest = superTest(server.app);

describe('Validator Middleware ', () => {
  it('person route without query', async () => {
    const response = await serverRequest.get('/person');
    expect(response.query).toBeFalsy();
    expect(response.status).toEqual(500);
    expect(response.error).toBeDefined();
  });

  it('Person Route', async () => {
    const response = await serverRequest.get('/person?name=zakeyah');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('zakeyah');
  });
});
