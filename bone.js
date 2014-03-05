var winston = require('winston');

module.exports = function attachLogger(skinny, options) {
    "use strict";

    skinny.logger = new winston.Logger({
        transports: [
            new winston.transports.Console(options)
        ]
    });

    skinny.on('warning', function(error) {
        skinny.logger.warn(error.name + ': ' + error.message, error);
    });

    skinny.on('error', function(error) {
        skinny.logger.error(error.name + ': ' + error.message, error);
    });
}