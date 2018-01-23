"use strict";
let user=require('@services/collectors/user');

module.exports = (endpoint) => {
    let path = endpoint.split('.');
    let handler=null;
    switch (path[0]) {
        case 'user':
            handler= user(path);
    }
    return handler||idle;
}

/**
 * simply calls next middleware
 * @param req
 * @param res
 * @param next
 * @return {*}
 */
function idle (req, res, next) {
    return next();
}