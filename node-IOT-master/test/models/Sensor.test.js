const mongoose = require('mongoose');

const Sensor = require('../../lib/models/Sensor');
describe('sensorModel', () => {
    it('sensorMode has address :)', () => {
        const sensor = new Sensor({
            address:"128.0.0.1" 
        });
        expect(sensor.toJSON()).toEqual({
            address:"128.0.0.1",
            _id:expect.any(mongoose.Types.ObjectId)

        });//expect
    });//it
    it('sensorMode has no address :(', () => {
        const sensor = new Sensor({
            
        });//new sensor
        const errors = sensor.validateSync().errors;
        expect(errors.address.message).toBe('Path `address` is required.');
    });//it
});//describe