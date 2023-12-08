const {
  RequestHandler,
  ErrorHandler: { INTERNAL_SERVER_ERROR },
} = require('intelli-utility');

const { loadBalancer, systemToken ,ms} = require('@config');
const saveFCMToken = async (userId, deviceId, fcmToken, appName) => {
  try {
    const payload = {
      userId,
      deviceId,
      fcmToken,
      appName,
    };
    const url = `${loadBalancer}/ms/apis/v1/fcm-token`;
    const { data: result } = await RequestHandler.post({ url, data: payload });

    if (result) {
      return false;
    }
    return result;
  } catch (err) {
    console.log("error inside FCM token");
    return false;
  }
};

const pushNotification = async (data) => {
    try {
        const url = `${loadBalancer}/ms/apis/v1/notification/push`;
        const { data: response } = await RequestHandler.post({ url, data });
        return response
    } catch (error) {
        throw new Error;
    }
};



module.exports = { saveFCMToken ,pushNotification};
