const PrivateTuition = require('@models/PrivateTut');
const { sendEmailWithPDFPrivate } = require('@common/utility/nodemail')


// Create Private Tuition
const createPrivateTuition = async (PrivateTuitionData) => {
  try {
    const privateTuition = await PrivateTuition.create(PrivateTuitionData);
    const mails = await sendEmailWithPDFPrivate(privateTuition);
    return privateTuition;
  } catch (error) {
    throw new Error('Internal server error');
  }
};

module.exports = {
    createPrivateTuition,
};


