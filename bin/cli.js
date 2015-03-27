#!/usr/bin/env node

var program = require('commander');
var package = require('../package.json');

program
  .version(package.version, '-v, --version');
