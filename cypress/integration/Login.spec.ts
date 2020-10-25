describe('Login page', () => {
    it('should successfully login', () => {
        cy.visit(Cypress.env('PUBLIC_URL') + '/login');
        cy.get('[data-testid="login-form-username"]').type(Cypress.env('USERNAME'));
        cy.get('[data-testid="login-form-password"]').type(Cypress.env('PASSWORD'));
        cy.get('button:submit').click();
        cy.url().should('not.contain', '/login');
    });
    it('should not pass validation', () => {
        cy.visit(Cypress.env('PUBLIC_URL') + '/login');
        cy.get('[data-testid="login-form-password"]').type('123');
        cy.get('button:submit').click();
        cy.get('.text-danger').should('exist');
        cy.url().should('contain', '/login');
    });
    it('should display alert if credentials are wrong', () => {
        cy.visit(Cypress.env('PUBLIC_URL') + '/login');
        cy.get('[data-testid="login-form-username"]').type('username that definitely DOES NOT exists ...');
        cy.get('[data-testid="login-form-password"]').type('123456');
        cy.get('button:submit').click();
        cy.get('.alert.alert-danger').should('exist');
        cy.url().should('contain', '/login');
    });
})
