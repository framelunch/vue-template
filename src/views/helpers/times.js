const Handlebars = require('handlebars');
const fs = require('fs');

module.exports = function(l, block) {
  return [...Array(l).keys()].reduce((tmp, index) => {
    tmp += block.fn(index);
    return tmp;
  }, '');
};
