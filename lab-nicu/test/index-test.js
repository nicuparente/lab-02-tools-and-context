'use strict';
const expect = require('expect');
const index = require('../index.js');

describe('testing index.js', () => {
  describe('testing index.js', () => {
    it(`should return ['node', 'index.js', 'NICU', 'SAURUS']`, () => {
      process.argv[0] = 'node';
      process.argv[1] = 'index.js';
      process.argv[2] = 'nicu';
      process.argv[3] = 'saurus';
      expect(index()).toEqual(['node', 'index.js', 'NICU', 'SAURUS']);
    });
  });
});