import {MarkDown} from "../../src/services/data/random/html/MarkDown";

describe('Articles CRUD operations', () => {
    it('should create and delete an article', () => {
        cy.login();
        cy.visit(Cypress.env('PUBLIC_URL') + '/article/create');
        cy.get('[data-testid="article-form-title"]').type('123 Article title');
        cy.get('[data-testid="article-form-perex"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
        cy.get('#content textarea').focus().invoke('val', MarkDown[0]).trigger('change').type('.');
        cy.get('input[type="file"]').attachFile('images_photos.jpg');
        cy.get('[data-testid="image-upload-spinner"]').should('not.exist');
        cy.get('[data-testid="heading-button-main"]').click();
        cy.url().should('not.contain', '/article/create');
        cy.visit(Cypress.env('PUBLIC_URL') + '/article/my');
        cy.get('tbody tr:first-child [data-testid="btn-action-remove"]').click();
        cy.get('[data-testid="my-articles-remove-spinner"]').should('exist');
        cy.get('[data-testid="my-articles-remove-spinner"]').should('not.exist');
    });
    // et cetera...
});
