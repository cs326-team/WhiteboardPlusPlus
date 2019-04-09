const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LoginSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('User', LoginSchema);