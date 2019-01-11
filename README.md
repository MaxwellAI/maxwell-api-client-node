# Maxwell API Client

A Node.js client (SDK) for easy use of the [Maxwell](https://maxwell.ai/) API.

## Installation

```
npm i maxwell-api-client --save
```

## Example

```javascript
const maxwell = require('maxwell-api-client-node');
const client = new maxwell.ApiClient();

client.authenticateCustomer('facebook', 'facebookAccessToken').then(function(data) {
  const authenticatedClient = new maxwell.ApiClient(data.session_token);
  authenticatedClient.listTeams()
    .then((data) => {
      // handle response
    })
    .catch((error) => {
      // handle error
    });
});
```
