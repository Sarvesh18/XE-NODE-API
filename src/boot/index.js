'use strict';

const boot = async (rootDir, app) => {
    //API Gateway
	await require('./apiSetup')(app);
};

module.exports = boot;
