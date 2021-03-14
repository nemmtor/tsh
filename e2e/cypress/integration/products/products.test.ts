/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('HomePage should', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('navigate to login after clicking login', () => {
    cy.clearSession();
    cy.get('[data-testid="loginButton"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
  });

  it('allow user to log out', () => {
    cy.clearSession();

    cy.get('[data-testid="loginButton"]').click();

    cy.get('#username').type(Cypress.env().userLogin);

    cy.get('#password').type(Cypress.env().userPassword);

    cy.get('[data-testid="submitLogin"]').click();

    cy.get('[data-testid="loginButton"]').should('not.exist');

    cy.get('[data-testid="avatar"]').should('exist').click();

    cy.contains('Logout').should('exist').click();

    cy.window().then((win) => {
      const authToken = win.localStorage.getItem('authToken');
      expect(authToken).to.equal(null);
    });
  });

  it('display products', () => {
    cy.clearSession();

    cy.get('[data-testid="image"]').should('exist');

    cy.get('[data-testid="cardContent"]').should('exist');

    cy.contains('Show details').should('exist');
  });

  it('display product on full screen', () => {
    cy.clearSession();

    cy.get(':nth-child(1) > [data-testid="cardContent"]').as('card');

    cy.get('@card')
      .get(':nth-child(1) > [data-testid="cardContent"] > h2')
      .then((title) => {
        const titleText = title.text();
        cy.get('@card').contains('Show details').click();

        cy.get('[data-testid="fullscreenItem"]').as('fullscreenCard');

        cy.get('@fullscreenCard')
          .should('exist')
          .get('[data-testid="fullscreenItem"] h2')
          .should('have.text', titleText);
      });
  });
});
