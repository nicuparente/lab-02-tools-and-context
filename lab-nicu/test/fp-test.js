'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');


describe('testing fp', () => {
  describe('testing map', () => {
    it('should return [2,3,4]', () => {
      let result = fp.map([1, 2, 3], n => n + 1);
      expect(result).toEqual([2, 3, 4]);
    });

    it('should return null', () => {
      expect(fp.map(10, n => n + 10)).toEqual(null);
    });
  });

  describe('testing filter', () => {
    it('should return [5,6]', () => {
      expect(fp.filter([1, 2, 3, 4, 5, 6], n => n >= 5)).toEqual([5, 6]);
    });

    it('should return null', () => {
      expect(fp.filter(123123, 123123)).toEqual(null);
    });
  });

  describe('testing reduce', () => {

    it('should return 20', () => {
      expect(fp.reduce([5, 5, 5, 5], [(a, c) => a + c])).toEqual(20);
    });

    it('should return 100 after having initial value of 85', () => {
      expect(fp.reduce([10, 5], [(a, c) => a + c, 85])).toEqual(100);
    });

    it('should return null', () => {
      expect(fp.reduce(12, [(a, c) => a + c])).toEqual(null);
    });

  });

  describe('testing concat', () => {
    it(`should return null`, () =>{
      expect(fp.concat(['Hello','the name is nicu ', 'Nicu'], null)).toEqual(null);
    });

    it(`should return [ 'Rafiki ', 'is ', 'freakin ', 'dope' ] after concating 3 arrays`, () => {
      expect(fp.concat(['Rafiki '],[['is ', 'freakin '],['dope']])).toEqual([ 'Rafiki ', 'is ', 'freakin ', 'dope' ]);
    });
  });

  describe('testing splice', () => {
    it('should return [1,2,3,4]', () => {
      let arr = [1,2,4];
      fp.splice(arr, [2, 0, 3]);
      expect(arr).toEqual([1,2,3,4]);
    });

    it('should return [3,4,5,1]', () => {
      let arr = [3,1,4,5,1];
      fp.splice(arr, [1,1]);
      expect(arr).toEqual([3,4,5,1]);
    });
  });

});


