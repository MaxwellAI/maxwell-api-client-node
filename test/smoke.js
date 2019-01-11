'use strict';

const env = require('./set-env.js');

describe('something', function() {
  it('does something', (done) => {
    console.log(env);
    done();
  });
});
