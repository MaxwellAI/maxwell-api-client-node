# Maxwell API Client

A Node.js client (SDK) for easy use of the [Maxwell](https://maxwell.ai/) API.

## Installation

```
npm i maxwell-api-client --save
```

## Example

```javascript
const maxwell = require('maxwell-api-client-node');
const client = new maxwell.ApiClient('ACCESS_TOKEN');

client.listTeams()
  .then((data) => {
    // handle response
  })
  .catch((error) => {
    // handle error
  });
```
