import { AppRoute } from '../../../src/routing/AppRoute.enum';

class Navigation {
  get homeLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.home}`;
  }

  get loginLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.login}`;
  }
}

export const NavigationMenu = new Navigation();
