const { env, systemToken } = require('@config');

const {
  Logger: log,
  ErrorHandler: { VERIFY_OTP_ERROR },
  apiServices: { otp: otpAPIService },
} = require('intelli-utility');
const { sendOtpMessage } = require('@root/src/apis/producers/otpProducer');
const { EVENT_TYPES } = require('@constants');
const { MEDIUM, ENV } = require('@common/utility/constants');
const sendotps = require('@root/src/apis/services/otp');

const processToSendOtp = async ({args}) => {
  log.info({info: 'OTP Service :: Inside Process To Send Otp'})
   const { phone } = args;
   const a=await sendotps.sendOtp(phone);
console.log(a);

if(a=="OTP sent successfully!")
{
  return true;
}
else{
  return false;
}
  

  // if (
  //   (env === ENV.PRD && phone === ENV.PROD_DUMMY_PHONE_NUM) ||
  //   phone.startsWith('420') ||
  //   env === ENV.DEV ||
  //   [].includes(phone)
  // ) {
  //   log.info({info: 'Working in Dev/Staging/Local enviroment'})
  //   return true;
  // }
  // const request = {
  //   phone,
  //   userId,
  // };

  // const eventType = medium === MEDIUM.CALL ? EVENT_TYPES.SENT_OTP_OVER_CALL : EVENT_TYPES.SENT_OTP_OVER_SMS;
  // return sendOtpMessage(request, eventType);
};

const verifyOTP = async ({ phone, otp, userId }) => {
  const abc= await sendotps.verifyOtp(phone,otp);
console.log("===========",abc);
if(abc == 'OTP verification successful!')
{
  return true
}
else{
  return false;
}

}

module.exports = {
  processToSendOtp,
  verifyOTP,
};
