'use strict';

class ApiClient {
  constructor(accessToken, baseUrl) {
      this.accessToken = accessToken;
      this.baseUrl = baseUrl || 'https://api.maxwell.ai/'
  }

  listTeams() {}


  listTeamBlueprints(teamId) {
    console.log(teamId);
  }

  triggerBlueprint(blueprintId, userId, channel, context) {
    console.log(blueprintId);
    console.log(userId);
    console.log(channel);
    console.log(context);
  }

  createBlueprint(teamId, blueprint) {
    console.log(teamId);
    console.log(blueprint);
  }

  createBlueprintRevision(blueprintId, blueprintRevision) {
    console.log(blueprintId);
    console.log(blueprintRevision);
  }

  publishBlueprintRevision(blueprintId, blueprintRevisionId) {
    console.log(blueprintId);
    console.log(blueprintRevisionId);
  }
}

class StagingApiClient extends ApiClient {
    constructor(accessToken) {
        super(accessToken, 'https://staging.api.maxwell.ai/')
    }
}

exports.ApiClient = ApiClient
exports.StagingApiClient = StagingApiClient
