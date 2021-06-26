// 
//  createfile.js
//  ~/framework/filesystem/
// 
//  created:    06/01/2021
// 
//  creates a file
// 
'use strict';

const fs = require('fs');

const createFile = (filePath) => {

  const checker = require('./checkexists-file');
  if (!checker.checkExists(filePath)) {
    fs.closeSync(fs.openSync(filePath, 'w')); // or 'a'. The check above renders it rather moot, old chap
  }
};;

module.exports = {
  create: createFile
};
