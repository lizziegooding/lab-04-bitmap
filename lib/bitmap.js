'use strict';

const Bitmap = module.exports = {};

Bitmap.parse = function(buffer) {
  this.fileHeader = buffer.slice(0, 13);
  this.dibHeader = buffer.slice(13, 53);
  this.colorTable = buffer.slice(53, 1077);
  this.pixelArray = buffer.slice(1077);
}

Bitmap.construct = function(obj) {
  // let buffer = new Buffer;
  let buffArray = [];
  let totLength;
  let keys = Object.keys(obj);
  for (let index = 0; index < obj.length; index++){
    let buff = obj[keys[index]];
    buffArray.push(buff);
    totLength += buff.length;
    console.log('buffArray', buffArray);

  }

  console.log(totLength);
  return Buffer.concat(buffArray, 11078);
}
