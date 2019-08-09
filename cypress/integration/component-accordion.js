const baseUrl = 'http://localhost:9001';
const standalonePath = 'osp/standalone/component';
const suffix = 'preview.html';
const applitoolsConfig = require('../../applitools.config').default;

const component = {
  id: 'component-accordion'
};

describe(`${component.id}`, function() {
  const v = { variant: 'css-interactive', states: 2 };
  const documentationId = `${component.id}-${v.variant}`;
  before(function() {
    cy.eyesOpen({
      ...applitoolsConfig,
      batchName: component.id
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

  it('should have all sections closed initially for state 0 (radio)', () => {
    cy.visit(`${baseUrl}/${standalonePath}/${documentationId}/0/${suffix}`);
    cy.eyesCheckWindow(`${documentationId} radio, initial`);
  });
});
