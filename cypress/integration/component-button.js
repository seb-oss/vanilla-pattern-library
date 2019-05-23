const baseUrl = 'http://localhost:9001';
const standalonePath = 'osp/standalone/component';
const suffix = 'preview.html';

const component = {
  id: 'component-button',
  variants: [
    { variant: 'primary', states: 4 },
    { variant: 'alternative', states: 4 },
    { variant: 'ghost-light', states: 4 },
    { variant: 'link', states: 4 },
    { variant: 'secondary', states: 4 },
    { variant: 'delete-confirm', states: 4 },
    { variant: 'delete', states: 4 },
    { variant: 'ghost-dark', states: 4 }
  ]
};

//   describe(`Button ${v.variant}`, function() {
//     const documentationId = `${component.id}-${v.variant}`;
//     for (let state = 0; state < v.states; state++) {
//       it(`Visits ${documentationId} in state ${state}`, function() {
//         cy.visit(
//           `${baseUrl}/${standalonePath}/${documentationId}/${state}/${suffix}`
//         );

//         cy.eyesOpen({
//           appName: 'Vanilla Pattern Library',
//           testName: `${v.variant} test - ${state}`,
//           browser: {
//             deviceName: 'iPhone X',
//             screenOrientation: 'portrait'
//           }
//         });

//         cy.eyesCheckWindow(`${documentationId} - ${state}`);

//         cy.eyesClose();
//       });
//     }
//   });
// });

describe(`Button primary`, function() {
  const v = { variant: 'primary', states: 4 };
  const documentationId = `${component.id}-${v.variant}`;
  it(`Visits ${documentationId}`, function() {
    cy.eyesOpen({
      appName: 'Vanilla Pattern Library',
      testName: `${v.variant} test`,
      browser: {
        deviceName: 'iPhone X',
        screenOrientation: 'portrait'
      }
    });

    for (let state = 0; state < v.states; state++) {
      cy.visit(
        `${baseUrl}/${standalonePath}/${documentationId}/${state}/${suffix}`
      );

      cy.eyesCheckWindow({ sizeMode: 'selector', selector: '.sdv-button' });
    }
    cy.eyesClose();
  });
});

// describe(`Button alternative`, () => {
//   const v = { variant: 'alternative', states: 4 };
//   const documentationId = `${component.id}-${v.variant}`;
//   it(`Visits ${documentationId}`, function() {
//     cy.eyesOpen({
//       appName: 'Vanilla Pattern Library',
//       testName: `${v.variant} test`,
//       browser: {
//         deviceName: 'iPhone X',
//         screenOrientation: 'portrait'
//       }
//     });

//     for (let state = 0; state < v.states; state++) {
//       cy.visit(
//         `${baseUrl}/${standalonePath}/${documentationId}/${state}/${suffix}`
//       );

//       cy.eyesCheckWindow(`${documentationId} - ${state}`);
//     }
//     cy.eyesClose();
//   });
// });
