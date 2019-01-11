# Maxwell API Client

A Node.js client (SDK) for easy use of the [Maxwell](https://maxwell.ai/) API.

## Installation

```
npm i maxwell-api-client --save
```

## Example

```javascript
var maxwell = require('maxwell-api-client');

var client = new maxwell.ApiClient('ACCESS_TOKEN');

client.send(new BlueprintList)
.then((response) => {
    //handle response
})
.catch((error) => {
    //handle error
});
```
