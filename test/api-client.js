'use strict';

const env = require('./set-env.js');
const chai = require('chai');
const expect = chai.expect;

describe('ApiClient', function() {
  this.timeout(10000);

  it('builds URL', (done) => {
    let uri = env.client._buildUrl('blueprints', '3.0');
    expect(uri).to.equal('https://api.maxwell.ai/3.0/blueprints');
    done();
  });
});
