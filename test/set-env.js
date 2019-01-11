'use strict';

const maxwell = require('./../index.js');
const client = new maxwell.ApiClient('ACCESS_TOKEN');
const clientWithoutAccessToken = new maxwell.ApiClient();

exports.client = client;
exports.clientWithoutAccessToken = clientWithoutAccessToken;
