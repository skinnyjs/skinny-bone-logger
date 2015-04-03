"use strict"

var winston = require('winston');

module.exports = function attachLogger(skinny, options) {
    skinny.logger = new winston.Logger({
        transports: [
            new winston.transports.Console(options)
        ]
    });

    skinny.on('warning', function(error) {
        skinny.logger.warn(error.stack);
    });

    skinny.on('error', function(error) {
        skinny.logger.error(error.stack);
    });
};