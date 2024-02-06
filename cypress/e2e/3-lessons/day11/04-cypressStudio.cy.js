describe('Cypress Studio', () => {
    it('Cypress Studio Kullanimi', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="nav-categories"]').click();
        cy.get('[data-test="nav-hand-tools"]').click();
        cy.get('[data-test="product-01HNK0NT56PF03YX7AMF28SW6V"] > .card-img-wrapper > .card-img-top').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="nav-cart"] > .fa').click();
        cy.get('[data-test="proceed-1"]').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */ 
    it('Cypress Studio Kullanimi - 2', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="search-query"]').clear('p');
        cy.get('[data-test="search-query"]').type('pliers{enter}');
        cy.get('[data-test="search-submit"]').click();
        cy.get('[data-test="search-submit"]').click();
        cy.get('[data-test="search-query"]').clear('p');

        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEC"]').check();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEJ"]').check();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEC"]').uncheck();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEJ"]').uncheck();
        cy.get('.ngx-slider-pointer-max').click();
        /* ==== End Cypress Studio ==== */
    });

});