// 
//  app.js
//  ~/
// 
//  created:    2021-06-26
// 
//  app entry point
// 
'use strict';

const main = () => {
    
  const logger = require('./log');
  logger.log("This had better work, God-DAMNIT!");

};

console.log("Running 'main' fn()....");
main();
console.log("Running 'main' completed.");

// module.exports = {
//   fn: fn
// };
