const { apiKey } = require('./applitools.key.js');

module.exports = {
  appName: 'Vanilla Pattern Library',
  showLogs: true,
  apiKey,
  browser: [
    { deviceName: 'iPhone X', screenOrientation: 'portrait' },
    { width: 1024, height: 768, name: 'chrome' },
    { width: 1440, height: 768, name: 'chrome' },
    { width: 1440, height: 768, name: 'firefox' },
    { width: 1440, height: 768, name: 'edge' },
    { width: 1440, height: 768, name: 'ie11' }
  ]
};
