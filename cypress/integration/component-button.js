const baseUrl = 'http://localhost:9001';
const standalonePath = 'osp/standalone/component';
const suffix = 'preview.html';
const applitoolsConfig = require('../../applitools.config').default;

const component = {
  id: 'component-button'
};

describe(`${component.id} - primary`, function() {
  const v = { variant: 'primary', states: 4 };
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
});

describe(`${component.id} - alternative`, function() {
  const v = { variant: 'alternative', states: 4 };
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
});

describe(`${component.id} - ghost-light`, function() {
  const v = { variant: 'ghost-light', states: 4 };
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
});

describe(`${component.id} - ghost-dark`, function() {
  const v = { variant: 'ghost-dark', states: 4 };
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
});

describe(`${component.id} - link`, function() {
  const v = { variant: 'link', states: 4 };
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
});

describe(`${component.id} - secondary`, function() {
  const v = { variant: 'secondary', states: 4 };
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
});

describe(`${component.id} - delete`, function() {
  const v = { variant: 'delete', states: 4 };
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
});

describe(`${component.id} - delete-confirm`, function() {
  const v = { variant: 'delete-confirm', states: 4 };
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
});
