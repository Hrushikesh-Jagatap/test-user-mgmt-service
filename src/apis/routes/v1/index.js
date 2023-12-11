const express = require('express');

const router = express.Router();
const { AuthManager } = require('intelli-utility');
const UserRouter = require('./Users');
const OtpRouter = require('./otp');
const HomeRouter = require('./HomeRouter')
const PrivateRouter = require('./PrivateRouter');
const ContactRouter = require('./ContactRouter')
const otpinapp = require('./otpinapp')
const NotificationRouter = require('./Notification');
const FCMRouter = require('./FCM');

router.use('/users', ContactRouter)

router.use('/users', HomeRouter);

router.use('/users', PrivateRouter);

router.use('/users', OtpRouter);
router.use('/otpinapp', otpinapp);
router.use('/notification',NotificationRouter)
router.use('/fcm-token', FCMRouter);

router.use('/users', AuthManager.requiresScopes(['Users', 'SYSTEM', 'ADMIN']), UserRouter);

module.exports = router;
