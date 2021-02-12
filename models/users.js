const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

//configures which user properties are included when converting MongoDB records to JSON objects which are returned in API responses
schema.set('toJSON', {
    virtuals: true, //includes the Mongoose virtual id property which is a copy of the _id property.
    versionKey: false, //excludes the version key (__v).
    //removing the MongoDB _id property and password hash so they are not included in API responses.
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('User', schema);