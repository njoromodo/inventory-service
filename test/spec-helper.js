'use strict';

const sinon = require('sinon');
const should = require('should');
require('should-sinon');
const stubPromise = require('sinon-stub-promise');
stubPromise(sinon);

process.env.NODE_ENV = 'test'

global.SRC = `${__dirname}/../src`;

