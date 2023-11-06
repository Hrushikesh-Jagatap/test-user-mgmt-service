const express = require('express');

const router = express.Router();
const { AuthManager } = require('intelli-utility');
const UserRouter = require('./Users');
const OtpRouter = require('./otp');

router.use('/users', OtpRouter);

router.use('/users', AuthManager.requiresScopes(['Users', 'SYSTEM', 'ADMIN']), UserRouter);

module.exports = router;
