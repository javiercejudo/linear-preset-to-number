/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('core-arbitrary-precision')(require('floating-adapter'));
var presetToNumber = require('../src/');

describe('preset to number', function() {
  it('should return a preset with numbers', function() {
    presetToNumber([
      [new Decimal('0'), new Decimal('1')],
      [new Decimal('32'), new Decimal('33.8')]
    ]).should.eql([[0, 1], [32, 33.8]]);
  });
});
