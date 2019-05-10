var path = require('path');
var sassTrue = require('sass-true');

[
  'inputs/common.spec.scss',
  'inputs/stepper.spec.scss',
  'inputs/text-field.spec.scss'
]
  .map(fileName => {
    return path.join(__dirname, fileName);
  })
  .forEach(file => {
    sassTrue.runSass({ file }, describe, it);
  });
