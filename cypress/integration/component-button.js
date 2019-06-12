const baseUrl = 'http://localhost:9001';
const standalonePath = 'osp/standalone/component';
const suffix = 'preview.html';
const applitoolsConfig = require('../../applitools.config').default;

const component = {
  id: 'component-button'
  // variants: [
  //   { variant: 'primary', states: 4 },
  //   { variant: 'alternative', states: 4 },
  //   { variant: 'ghost-light', states: 4 },
  //   { variant: 'link', states: 4 },
  //   { variant: 'secondary', states: 4 },
  //   { variant: 'delete-confirm', states: 4 },
  //   { variant: 'delete', states: 4 },
  //   { variant: 'ghost-dark', states: 4 }
  // ]
};

describe(`${component.id} - primary`, function() {
  const v = { variant: 'primary', states: 4 };
  const documentationId = `${component.id}-${v.variant}`;
  before(function() {
    cy.eyesOpen({
      ...applitoolsConfig,
      batchName: documentationId,
      browser: [
        { deviceName: 'iPhone X', screenOrientation: 'portrait' },
        { width: 1024, height: 768, name: 'chrome' },
        { width: 1440, height: 768, name: 'chrome' },
        { width: 1440, height: 768, name: 'firefox' },
        { width: 1440, height: 768, name: 'edge' },
        { width: 1440, height: 768, name: 'ie11' }
      ]
    });
  });

  after(function() {
    cy.eyesClose();
  });

  it(`should render all states for ${documentationId}`, () => {
    for (let state = 0; state < v.states; state++) {
      cy.visit(
        `${baseUrl}/${standalonePath}/${documentationId}/${state}/${suffix}`
      );

      cy.eyesCheckWindow(`${documentationId}, state: ${state}`);
    }
  });
});
