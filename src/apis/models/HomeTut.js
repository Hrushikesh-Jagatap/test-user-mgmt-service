const mongoose = require('mongoose');

const homeTuitionSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    default: null
  },

  phoneNumber: {
    type: String
  },

  subject: {
    type: String,
    // required: true,
    default: null
  },

  language: {
    type: String,
  },

  grade: {
    type: String,
    // required: true,
    default: null
  },

  targetExam: {
    type: String,
    // required: true,
    default: null
  },

  priceLimit: {
    type: Number,
    // required: true,
    default: null
  },

  pinCode: {
    type: String,
    // required: true,
  },

  address: {
    type: String,
    // required: true,
  },

  email: {
    type: String,
    default: null
  },


  pricePerHour: {
    type: String,
    default: null
  }
});

const HomeTuition = mongoose.model('HomeTuition', homeTuitionSchema);

module.exports = HomeTuition;
