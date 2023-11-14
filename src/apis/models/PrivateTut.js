const mongoose = require('mongoose');

const privateTuitionSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    default: null
  },

  phoneNumber: {
    type: Number
  },

  email: {
    type: String,
    default: null
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
    type: String,
    // required: true,
    default: null
  },

  pricePerHour: {
    type: String,
    default: null
  }

});

const PrivateTuition = mongoose.model('PrivateTuition', privateTuitionSchema);

module.exports = PrivateTuition;

