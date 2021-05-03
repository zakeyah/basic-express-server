'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const serverRequest= supertest(server.app);

describe('Testing Server',()=>{
  it('handle home route', async()=>{
    let response = await serverRequest.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('gooood');
  });

  it('bad route', async()=>{
    let response = await serverRequest.get('/blaaaa');
    expect(response.status).toEqual(404);
  });

  it('bad method', async()=>{
    let response = await serverRequest.post('/');
    expect(response.status).toEqual(404);
  });



});

