
require('dotenv').config();//always import this line first whenever used
const request = require('supertest');
const app = require('../../lib/app');
require('../connect-db');

describe('sensorRoutes', () => {
    it('creates new Sensor in MongoDB', async() => {
        const res = await request(app)
            .post('/api/v1/sensors')
            .send({address:'testAddress'});
     expect(res.body).toEqual({
         _id:expect.any(String),
         address:'testAddress',
         __v:0 
     }); //toEqual  
    });//it
  
});//describe