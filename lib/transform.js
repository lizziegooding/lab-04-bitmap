'use strict';

const transform = module.exports = {};

transform.invert = colorTable => {
  let inverseColorTable = colorTable.map(ele => 255 - ele);
  return inverseColorTable;
}
