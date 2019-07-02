/*routes are lowercase and plural
    models are uppercase and singular 
    classes are uppercase in javascript */
const {Router} = require('express');
const Sensor = require('../models/Sensor');

module.exports = Router()
.post('/', async(req, res, next) => {//req =input res = output
    const{
        address
    } = req.body;
    try {
        const createdSensor =await Sensor.create({address});
    res.send(createdSensor);
    } catch (err) {
        next(err);
    }
    
})
