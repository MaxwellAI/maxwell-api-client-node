'use strict';

const ae = require('./api-error');

class ResponseError extends ae.ApiError {
  constructor(error) {
    super(error);
  }
}

exports.ResponseError = ResponseError;
