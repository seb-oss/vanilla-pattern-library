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

  it('should open first section when clicked for state 0 (radio)', () => {
    cy.visit(`${baseUrl}/${standalonePath}/${documentationId}/0/${suffix}`);

    cy.get('dt')
      .first()
      .click();

    cy.eyesCheckWindow(`${documentationId} radio, first open`);
  });
});

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

  it('should open first and then second section for state 0 (radio)', () => {
    cy.visit(`${baseUrl}/${standalonePath}/${documentationId}/0/${suffix}`);

    cy.get('dt')
      .eq(1)
      .click();

    cy.eyesCheckWindow(`${documentationId} radio, second open`);
  });
});

describe(`${component.id}`, function() {
  const v = { variant: 'css-interactive' };
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

  it('should open first section when clicked for state 1 (checkbox)', () => {
    cy.visit(`${baseUrl}/${standalonePath}/${documentationId}/1/${suffix}`);

    cy.get('dt')
      .first()
      .click();

    cy.eyesCheckWindow(`${documentationId} checkbox, first open`);
  });
});

describe(`${component.id}`, function() {
  const v = { variant: 'css-interactive' };
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

  it('should open first and then second section for state 1 (checkbox)', () => {
    cy.visit(`${baseUrl}/${standalonePath}/${documentationId}/1/${suffix}`);

    cy.get('dt')
      .first()
      .click();

    cy.get('dt')
      .eq(1)
      .click();

    cy.eyesCheckWindow(`${documentationId} checkbox, first and second open`);
  });
});

describe(`${component.id}`, function() {
  const v = { variant: 'static', states: 1 };
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

describe(`${component.id}`, function() {
  const v = { variant: 'subheadlines', states: 1 };
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
