var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema ({
  email: { 
      type: String, 
      required: true, unique: true },
  password: { 
      type: String, 
      required: true},
  surname : {
    type: String,
    required: true},
  name : {
      type: String, 
    required: true},
  date: {
    type: Date,
    default: Date.now
}
});

var Users = mongoose.model('Users', UsersSchema);
module.exports = Users;