const fs = require('fs');
const path = require('path');
const sast = require('sast');
const prettier = require('prettier');

const testDirPath = './src/test';

const traverseDirectory = dir => {
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    list.map(file => {
      const filePath = path.resolve(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (stats.isDirectory()) {
          traverseDirectory(filePath, err => {
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

const renderMixinIt = (mixinName, hasArgs) => {
  const mixin = `${mixinName}${hasArgs ? '("dummy arg")' : '()'}`;
  return `@include it('Should compile ${mixinName}') {
      @include assert {
          @include output {
              @include ${mixin};
           }
           @include expect {
               @include ${mixin};
            }
        }
    }`;
};

const generateMixinTest = async (file, filePath) => {
  const basename = path.basename(path.dirname(filePath));
  try {
    const tree = await sast.parseFile(filePath, { syntax: 'scss' });
    const specDir = `${testDirPath}/${basename}`;
    const specFileName = `${file.substr(1).replace('-mixins', '.spec')}`;

    if (!fs.existsSync(specDir)) {
      fs.mkdirSync(specDir);
    }
    const code = `
    @import 'true';
    @import "../../components/${basename}/${file}";
    @include describe("${basename} ${file}") {
        ${tree.children
          .filter(node => node.type === 'mixin')
          .map(mixin => {
            const args = mixin.children.find(c => c.type === 'arguments');
            const hasArg =
              args &&
              args.children &&
              args.children.length &&
              args.children.some(
                c => c.children && c.children[0].type === 'ident'
              );

            return renderMixinIt(
              mixin.children.find(c => c.type === 'ident').value,
              hasArg
            );
          })
          .join('\n')}
    }`;

    const fd = fs.openSync(`${specDir}/${specFileName}`, 'w');

    fs.writeSync(fd, prettier.format(code, { parser: 'scss' }));
  } catch (error) {
    return console.error('Parse error', filePath, error);
  }
};

traverseDirectory('./src/components', err => {
  if (err) throw err;
});
