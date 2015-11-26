/*jshint node:true */

'use strict';

var scaleToNumber = require('linear-scale-to-number');

module.exports = function presetToNumber(preset) {
  return preset.map(scaleToNumber);
};
