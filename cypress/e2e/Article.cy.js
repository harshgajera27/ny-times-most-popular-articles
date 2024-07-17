describe('Template Spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    })

  it('Should website load', () => {
    cy.get('[data-testid="title"]').should('have.text','NY Times Most Popular Articles')
  })

  it('should display the page title', () => {
    cy.get(':nth-child(1) > .ant-card > .ant-card-body > [data-testid="article-title"] > .ant-card-meta-detail > .ant-card-meta-title').should('be.visible');
    cy.get(':nth-child(1) > .ant-card > .ant-card-body > [data-testid="article-title"] > .ant-card-meta-detail > .ant-card-meta-title').click();
  })

  it('should display article details when clicking on an article',() => {
    cy.get(':nth-child(1) > .ant-card > .ant-card-body > [data-testid="article-title"] > .ant-card-meta-detail > .ant-card-meta-title').click();
    cy
      .get('.ant-col-lg-14 > h1.ant-typography')
      .get('div.ant-typography')
      .should('be.visible');
  })
})
