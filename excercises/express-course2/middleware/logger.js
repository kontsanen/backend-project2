const moment = require('moment');

//tää on joku middleware juttu joka sit run aina kun tulee request jostain
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

module.exports = logger;