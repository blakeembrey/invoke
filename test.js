/* global describe, it */
var invoke = require('./');
var assert = require('assert');

describe('invoke', function () {
  it('should invoke the method', function () {
    var children = [1, 2, 3, true];

    assert.deepEqual(
      children.map(invoke('toString', 10)),
      ['1', '2', '3', 'true']
    );
  });
});
