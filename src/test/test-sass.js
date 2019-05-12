var path = require('path');
const fs = require('fs');
var sassTrue = require('sass-true');

const traverseTests = (dir, done) => {
  let specs = [];

  fs.readdir(dir, (err, list) => {
    if (err) return done(err);

    var pending = list.length;

    if (!pending) return done(null, specs);

    list.forEach(file => {
      const filePath = path.resolve(dir, file);

      fs.stat(filePath, (err, stats) => {
        if (stats.isDirectory()) {
          traverseTests(filePath, (err, data) => {
            specs = specs.concat(data);
            if (!--pending) done(null, specs);
          });
        } else {
          if (path.extname(file) == '.scss') {
            specs.push(filePath);
          }
          if (!--pending) done(null, specs);
        }
      });
    });
  });
};

traverseTests(__dirname, (err, data) => {
  data.forEach(file => {
    sassTrue.runSass({ file }, describe, it);
  });
});

// There is a bug somewhere - had to add this to get the tests running :/
sassTrue.runSass(
  {
    file: `${__dirname}/accordions/accordion.spec.scss`
  },
  describe,
  it
);
