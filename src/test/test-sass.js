const path = require('path');
const fs = require('fs');
const sassTrue = require('sass-true');
const _ = require('lodash/array');
const tildeImporter = require('node-sass-tilde-importer');

const traverseTestsSync = dir => {
  const list = fs.readdirSync(dir);
  const files = list.map(file => {
    const filePath = path.resolve(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      return traverseTestsSync(filePath);
    } else {
      if (path.extname(file) == '.scss') {
        return filePath;
      }
    }
  });
  return _.flatten(files.filter(node => node));
};

traverseTestsSync(__dirname).forEach(file => {
  sassTrue.runSass(
    {
      file,
      importer: tildeImporter
    },
    describe,
    it
  );
});
