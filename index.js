// takes in an input and output filepath, reads the file, transforms the file, writes a new file to the output filepath

'use strict';

const fio = require('./lib/file-ops.js');
const Bitmap = require('./lib/bitmap.js');
const transform = require('./lib/transform.js')

fio.readBuffer('./assets/bitmap.bmp', (err, data) => {
  if (err) return console.log(err);
  let length = data.length;
  console.log('data length', length);
  let colorTable = data.slice(53, 1077);
  colorTable = transform.invert(colorTable);
  // let tDlength = image.fileHeader.length + image.dibHeader.length + image.colorTable.length + image.pixelArray.length;
  // let transformData = Bitmap.construct(image);
  // console.log('transformData length', tDlength);
  // console.log(Buffer.isBuffer(transformData));
  // console.log(transformData.length);
  // this.filheader = buffer.slice(0, 13);
  // this.dibHeader = buffer.slice(14, 53);
  // this.colorTable = buffer.slice(54, 1077);
  // this.pixelArray = buffer.slice(1078);
  fio.writeBuffer('./assets/inverse-bitmap.bmp', data, (err, data) => {
    if (err) return console.log(err);
    console.log('done!');
  });
});
