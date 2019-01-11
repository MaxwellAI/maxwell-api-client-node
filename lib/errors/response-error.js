'use strict';

const ae = require('./api-error');

class ResponseError extends ae.ApiError {
  constructor(request, statusCode, message) {
    super(message);
    this.request = request;
    this.statusCode = statusCode;
  }
}

exports.ResponseError = ResponseError
