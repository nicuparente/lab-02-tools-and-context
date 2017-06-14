'use strict';

const fp = require('./lib/fp.js');

const main = module.exports = () => {
  let res = fp.map(process.argv, (arg) => {  
    if(process.argv.indexOf(arg) > 1){
      console.log(arg.toUpperCase());
      return arg.toUpperCase();
    }
    return arg;
  });
  return res.splice(res);
};

main();