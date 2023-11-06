const ajvInstance = require('./ajv-instance');
const Otp = require('./Otp');
const User = require('./User');

module.exports = {
  ajvInstance,
  ...Otp,
  ...User,
};
