const fs = require('fs');
const path = require('path');
const sast = require('sast');
const prettier = require('prettier');

const testDirPath = './src/test';
const traverseDirectory = (dir, done) => {
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    list.map(file => {
      const filePath = path.resolve(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (stats.isDirectory()) {
          traverseDirectory(filePath, (err, data) => {
            if (err) done(err);
          });
        } else {
          if (path.extname(file) == '.scss' && filePath.includes('mixins')) {
            generateMixinTest(file, filePath);
          }
        }
      });
    });
  });
};

const renderMixinIt = (mixinName, args) => {
  const mixin = `${mixinName}${args ? '(' + args + ')' : '()'}`;
  return `@include it('Should compile ${mixinName}') {\n@include assert {\n@include output {\n@include ${mixin};\n}\n@include expect {\n@include ${mixin};\n}\n}\n}`;
};

const generateMixinTest = (file, filePath) => {
  const basename = path.basename(path.dirname(filePath));
  return sast
    .parseFile(filePath, { syntax: 'scss' })
    .then(tree => {
      const specDir = `${testDirPath}/${basename}`;
      const specFileName = `${file.substr(1).replace('-mixins', '.spec')}`;

      if (!fs.existsSync(specDir)) {
        fs.mkdirSync(specDir);
      }
      const code = `@import 'true'; \n@import "../../components/${basename}/${file}";\n\n\n@include describe("${basename} ${file}") {\n${tree.children
        .filter(node => node.type === 'mixin')
        .map(mixin => {
          const args = mixin.children.find(c => c.type === 'arguments');

          const arg =
            mixin.children.find(c => c.type === 'arguments') &&
            args.children &&
            args.children.length &&
            args.children.some(
              c => c.children && c.children[0].type === 'ident'
            );

          return arg
            ? renderMixinIt(
                mixin.children.find(c => c.type === 'ident').value,
                'arg'
              )
            : renderMixinIt(mixin.children.find(c => c.type === 'ident').value);
        })
        .join('\n')}\n}`;
      const fd = fs.openSync(`${specDir}/${specFileName}`, 'w');
      fs.writeSync(fd, prettier.format(code, { parser: 'scss' }));
      return `${basename}${specFileName}`;
    })
    .catch(error => console.error('Parse error', filePath, error));
};

traverseDirectory('./src/components', (err, testIndex) => {
  if (err) throw err;
  console.log('testindex', testIndex);
});
