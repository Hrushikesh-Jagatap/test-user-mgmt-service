const HomeTuition = require('@models/HomeTut');
const { sendEmailWithPDF } = require('@common/utility/nodemail')


// Create Home Tuition
const createHomeTuition = async (homeTuitionData) => {
  try {
    const homeTuition = await HomeTuition.create(homeTuitionData);
    const maail = await sendEmailWithPDF(homeTuitionData);
    return homeTuition;
  } catch (error) {
    throw new Error('Internal server error');
  }
};

module.exports = {
  createHomeTuition,
};
