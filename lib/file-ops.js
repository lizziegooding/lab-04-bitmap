// read Bitmap
// write Bitmap

// 1. open file using fs and read it into a buffer
// 2. convert buffer headers data into a Javascript Object (using constructors)
// 3. Run a transform on the buffer directly (see bitmap.js)
// 4. Write the buffer to a new file.

'use strict';

const fs = require('fs');

const fio = module.exports = {};

fio.readBuffer = (filepath, callback) => {
  if(typeof filepath !== 'string') return callback(new Error('filepath must be a string'));

  fs.readFile(filepath, (err, data) => {
    if(err) return callback(err);
    // slice buffer into image sections
    // create a new bitmap from the sections using an external bitmap constructors
    let buffer = new Buffer(data);
    //transform the color table
    callback(null, buffer);
  });
};

fio.writeBuffer = (outputPath, buffer, callback) => {
  if (typeof outputPath !== 'string') return callback(new Error('filepath must be a string'));

  fs.writeFile(outputPath, buffer, (err, data) => {
    if(err) return callback(err);
    console.log('file saved');
  })
}
