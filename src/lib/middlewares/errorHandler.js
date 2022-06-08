'use strict';

const errorHandler = (err, req, res, next) => {

    if(res.headersSent) {
        res.end();
    }
    else if(err instanceof Error) {

        winston.log('error', `SERVER ERROR: ${req.method}:${req.url}`, err);

        res.status(500).json({
            code: '500',
            error: err,
            message: err.message || 'Internal Server Error'
        });
    }
    else {
        res.status(500).json({
            code: '500',
            error: err,
            message: 'Something Went Wrong'
        });
    }

    next();
};

/**
 * @type {errorHandler}
 */
module.exports = errorHandler;
