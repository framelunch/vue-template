const Handlebars = require('handlebars');
const fs = require('fs');

module.exports = function(templatePath) {
  const template = Handlebars.compile(fs.readFileSync(`${this.viewPath}/${templatePath}`, 'UTF-8'));
  return new Handlebars.SafeString(template(this));
};
