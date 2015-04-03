"use strict"

var winston = require('winston');

module.exports = function attachLogger(skinny, options) {
    skinny.logger = new winston.Logger({
        transports: [
            new winston.transports.Console(options)
        ]
    });

    skinny.on('warning', function(error) {
        skinny.logger.warn(getMessage(error), error.stack);
    });

    skinny.on('error', function(error) {
        skinny.logger.error(getMessage(error), error.stack);
    });
};

function getMessage(error) {
    var message;

    if (error.name !== error.message) {
        message = error.name + ': ' + error.message
    } else {
        message = error.message;
    }

    return message;
}