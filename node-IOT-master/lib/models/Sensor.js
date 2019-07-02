const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
address: {
    type: String, 
    required: true 
},


});  
const Sensor = mongoose.model('Sensor', sensorSchema);
module.exports = Sensor;