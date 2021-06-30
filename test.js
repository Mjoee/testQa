
context('Test QA', () => {
  it('test', () => {
    cy.visit('https://www.hajper.com');
    cy.wait(300);
    cy.get('[data-at="logo-wrapper-homepage"]').should('be.visible');
    cy.get("#regulations-header").should('be.visible');
    cy.scrollTo('bottom')
    cy.get('[data-at="spelinspektionen-logo"]').should('be.visible');
    cy.visit('https://www.hajper.com/casino/explore');
    cy.get('[data-at="game-card"]').click();
    cy.get('[data-at="love-icon"]').click();
    cy.get('[data-at="notification-bar-header"]').should('be.visible');

  })
})
