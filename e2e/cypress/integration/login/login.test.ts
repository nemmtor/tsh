/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('LoginPage should', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env().baseUrl}/login`);
  });

  it('log user in', () => {
    cy.clearSession();

    cy.get('#username').type(Cypress.env().userLogin);

    cy.get('#password').type(Cypress.env().userPassword);

    cy.get('[data-testid=submitLogin]').click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });

    cy.window().then((win) => {
      const authToken = win.localStorage.getItem('authToken');
      expect(authToken).to.not.equal(null);
    });
  });

  it('show errors when trying to submit empty form', () => {
    cy.clearSession();

    cy.get('[data-testid="submitLogin"]').click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });

    cy.contains('Username is required').should('exist');

    cy.contains('Password is required').should('exist');

    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
  });

  it('show errors when trying to submit incorrect data', () => {
    cy.clearSession();

    cy.get('#username').type(Math.random().toString());

    cy.get('#password').type(Math.random().toString());

    cy.get('[data-testid="submitLogin"]').click();

    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });

    cy.contains('Username or password incorrect').should('exist');

    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
  });
});
