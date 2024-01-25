describe('Yeni Sekmede Çalışma', () => {
    it("target attribute'ünü kaldırarak yeni sekmede çalışma", () => {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.get('#search').type('Cypress')
    });

    
    it("Yeni tab'deki sayfayı ziyaret ederek yeni sayfada çalışma", () => {
        cy.visit('https://www.letskodeit.com/practice');

        // Cypress aynı URL içindeki farklı path'lere gidilmesine izin verir.
        cy.visit('https://www.letskodeit.com/courses');
        cy.get('#search').type('Cypress')

        // Cypress, farklı bir URL'e gidilmesine izin vermez.
        cy.visit('https://www.amazon.com/');
        cy.get('#twotabsearchtextbox').type('iphone')

    });
});