# linear-preset-to-number

[![Build Status](https://travis-ci.org/javiercejudo/linear-preset-to-number.svg)](https://travis-ci.org/javiercejudo/linear-preset-to-number)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/linear-preset-to-number/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/linear-preset-to-number?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/linear-preset-to-number/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/linear-preset-to-number)

Ensures a linear preset has numbers

## Install

    npm i linear-preset-to-number

## Usage

```js
var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var presetToNumber = require('linear-preset-to-number');

presetToNumber([
  [new Decimal('0'), new Decimal('1')],
  [new Decimal('32'), new Decimal('33.8')]
]);
// => [[0, 1], [32, 33.8]]
```

For the opposite behaviour, check [linear-preset-to-decimal](https://github.com/javiercejudo/linear-preset-to-decimal).

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
