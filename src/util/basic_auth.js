const winston = require('winston');
const userService=require('../service/user.service');
module.exports = basicAuth
async function basicAuth(req, res, next) {
    if (req.path === '/users/register') {
        return next();
    }
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    let user;
    try {
        user = await userService.authenticate({ username, password });
    } catch (error) {
        winston.error(error);
    }
    if (!user) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }
    // attach user to request object
    req.user = user
    next();
}