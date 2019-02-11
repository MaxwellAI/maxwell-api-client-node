'use strict';

const rp = require('request-promise');
const rp_errors = require('request-promise/errors');
const api_errors = require('./errors');

class ApiClient {
  constructor(accessToken, baseUrl) {
    this.accessToken = accessToken;
    this.baseUrl = baseUrl || 'https://api.maxwell.ai/'
    this.defaultTimeout = 10
    this.defaultApiVersion = '2.0';
  }

  _buildUrl(endpoint, apiVersion) {
    return `${this.baseUrl}${apiVersion}/${endpoint}`;
  }

  _doRequest(options) {
    let headers = {'Content-Type': 'application/json'}
    if (this.accessToken) {
      headers.Authorization = `Bearer ${this.accessToken}`;
    }
    let rpOptions = {
      method: options.method || 'GET',
      uri: this._buildUrl(options.endpoint, options.apiVersion || this.defaultApiVersion),
      qs: options.params,
      headers: headers,
      json: true,
      body: options.body,
    }
    return rp(rpOptions)
      .then((response) => {
        return new Promise((resolve) => {
          return resolve(response);
        });
      })
      .catch(rp_errors.StatusCodeError, ((error) => {
        throw new api_errors.ResponseError(error);
      }))
      .catch(rp_errors.RequestError, ((error) => {
        if (error.cause.code === 'ETIMEDOUT' || error.cause.code === 'ESOCKETTIMEDOUT') {
          throw new api_errors.TimeoutError(error);
        }
        throw error;
      }));
  }

  authenticateCustomer(identityProvider, token) {
    return this._doRequest({
      method: 'POST',
      endpoint: 'customers/authenticate',
      body: {
        identity_provider: identityProvider,
        token: token,
      }
    })
  }

  getCustomerProfile() {
    return this._doRequest({
      endpoint: 'customers/profile',
    })
  }

  listCustomerChannels() {
    return this._doRequest({
      endpoint: 'customers/channels',
    })
  }

  listTeams() {
    return this._doRequest({
      endpoint: 'teams',
    });
  }

  createTeam(team) {
    return this._doRequest({
      method: 'POST',
      endpoint: 'teams',
      body: team,
    })
  }

  listTeamBlueprints(teamId) {
    return this._doRequest({
      endpoint: `teams/id/${teamId}/blueprints`,
    });
  }

  triggerBlueprint(blueprintId, user, channel, context) {
    return this._doRequest({
      method: 'POST',
      endpoint: 'triggers',
      body: {
        blueprint: {id: blueprintId},
        user: user,
        channel: channel,
        context: context,
      }
    });
  }

  createBlueprint(teamId, blueprint) {
    return this._doRequest({
      method: 'POST',
      endpoint: `teams/id/${teamId}/blueprints`,
      body: blueprint,
    });
  }

  createBlueprintRevision(blueprintId, blueprintRevision) {
    return this._doRequest({
      apiVersion: '1.0',
      method: 'POST',
      endpoint: `blueprints/id/${blueprintId}/revisions`,
      body: blueprintRevision,
    });
  }

  listWhitelistedDomains(channelId, platform) {
    return this._doRequest({
      apiVersion: '2.0',
      method: 'GET',
      endpoint: `channels/${platform}/${channelId}/whitelisted-domains`,
    });
  }

  addWhitelistedDomains(channelId, platform, whitelistedDomains) {
    return this._doRequest({
      apiVersion: '2.0',
      method: 'PUT',
      endpoint: `channels/${platform}/${channelId}/whitelisted-domains`,
      body: whitelistedDomains,
    });
  }

  publishBlueprintRevision(blueprintId, blueprintRevisionId) {
    return this._doRequest({
      apiVersion: '1.0',
      method: 'POST',
      endpoint: `blueprints/id/${blueprintId}/revisions/id/${blueprintRevisionId}/publish`,
    });
  }
}

class StagingApiClient extends ApiClient {
    constructor(accessToken) {
        super(accessToken, 'https://staging.api.maxwell.ai/')
    }
}

exports.ApiClient = ApiClient
exports.StagingApiClient = StagingApiClient
