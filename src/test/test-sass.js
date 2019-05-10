var path = require('path');
var sassTrue = require('sass-true');

['stepper.spec.scss']
  .map(fileName => {
    return path.join(__dirname, fileName);
  })
  .forEach(file => {
    sassTrue.runSass({ file }, describe, it);
  });
