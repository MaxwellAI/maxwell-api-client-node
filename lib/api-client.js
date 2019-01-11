'use strict';

class ApiClient {
  constructor (accessToken, baseUrl) {
      this.accessToken = accessToken;
      this.baseUrl = baseUrl || "https://api.maxwell.ai/"
  }
}

exports.ApiClient = ApiClient
