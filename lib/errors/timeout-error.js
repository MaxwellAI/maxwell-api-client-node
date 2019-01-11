'use strict';
const ae = require("./api-error");

class TimeoutError extends ae.ApiError {
  constructor(request, innerException) {
    super(`Client did not get response within ${request.timeout} ms`);
    this.request = request;
    this.innerException = innerException;
  }
}

exports.TimeoutError = TimeoutError
