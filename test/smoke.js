'use strict'

var chai = require('chai').assert;
var maxwell = require('./../index.js');

var env = require('./set-env.js');

describe('something', function(){
  it ('does something', (done) => {
    console.log(env);
    done();
  });
});
