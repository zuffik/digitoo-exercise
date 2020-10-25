// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', {prevSubject: false}, (username: string = Cypress.env('USERNAME'), password: string = Cypress.env('PASSWORD')) => {
    return cy.request({
        headers: {
            'X-API-KEY': Cypress.env('REACT_APP_API_KEY'),
        },
        method: 'POST',
        url: Cypress.env('REACT_APP_API_URL') + '/login',
        body: {username, password: password.toString()}

    }).then(res => {
        localStorage.setItem('auth', JSON.stringify({
            accessToken: res.body,
            tenant: {
                apiKey: Cypress.env('REACT_APP_API_KEY'),
                tenantId: Cypress.env('REACT_APP_TENANT_ID')
            }
        }))
    })
});
