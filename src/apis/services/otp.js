require('dotenv').config();
const express = require('express');
const fast2sms = require('fast-two-sms');
const app = express();

app.use(express.json());

var otpStore = {};

const sendOtp = async (phone) => {
  try {
    const mobileNumber = phone;
    const otp = Math.floor(1000 + Math.random() * 9000);
    const messages = `Your OTP is from IntelliedTech ${otp}  Do not share with anyone`;

    // Store the generated OTP and its expiration time
    const expirationTime = Date.now() + 10 * 60 * 1000; // Set OTP expiration time to 5 minutes from now
    otpStore[mobileNumber] = { otp, expirationTime };

    // Send the OTP to the user's mobile number using Fast2SMS
    const options = {
      authorization: "y7G9OapjtLCcEKs0XbS1w4mviqlJANhZ53ozP8k26RenQgFUBfws1D6b4mqN2ARnhzaCVk9XUYEFxote",
      message: messages,
      numbers: [mobileNumber],
    };

    const response = await fast2sms.sendMessage(options);
    console.log(response);
    return "OTP sent successfully!"
    // res.json({ success: true, message: 'OTP sent successfully!' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return "Failed to send OTP"
   
    // res.status(500).json({ success: false, message: 'Failed to send OTP.' });
  }
};

const verifyOtp = (mobileNumber,otps) => {
  try {
    otps=parseInt(otps);
    // const { mobileNumber ,} = req.body;
    
    const expirationTimes = Date.now() + 0 * 60 * 1000; // Set OTP expiration time to 5 minutes from now

    if (otpStore.hasOwnProperty(mobileNumber)) {
      const { otp, expirationTime } = otpStore[mobileNumber];

      if (otp == otps && expirationTimes<expirationTime) {
         return 'OTP verification successful!';
        // res.json({ success: true, message: 'OTP verification successful!' });
      } else {
          return 'Invalid OTP';
        // res.status(400).json({ success: false, message: 'Invalid OTP.' });
      }
    } else {
          return 'Mobile number not found or OTP expired';
    //   res.status(400).json({ success: false, message: 'Mobile number not found or OTP expired.' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return "Failed to verify OTP"
    // res.status(500).json({ success: false, message: 'Failed to verify OTP.' });
  }
};

// Routes
// app.post('/send-otp', sendOtp);
// app.post('/verify-otp', verifyOtp);

// const port = process.env.PORT || 3020;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

module.exports = {
  sendOtp,
  verifyOtp,
};
