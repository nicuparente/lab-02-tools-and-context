'use strict';

const fp = module.exports = {};

fp.map = (list, args) => {
  return Array.isArray(list) ? Array.prototype.map.call(list, args) : null;
};

fp.filter = (list, args) => {
  return Array.isArray(list) ? Array.prototype.filter.call(list, args) : null;
};

fp.reduce = (list, args) => {
  return (Array.isArray(list) && Array.isArray(args)) ? Array.prototype.reduce.apply(list, args) : null;
};

fp.concat = (list, args) => {
  return (Array.isArray(list) && Array.isArray(args)) ? Array.prototype.concat.apply(list, args) : null;
};

fp.splice = (list, args) => {
  return (Array.isArray(list)) ? Array.prototype.splice.apply(list,args) : null;
};