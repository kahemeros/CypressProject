describe('Test Aşamaları', () => {
    it('Temel Komutlar', () => { // Her it (test) methodu içinde given, when ve then aşamaları bulunmalı
        cy.visit('https://www.kitapyurdu.com') // Given --> Test için ön hazırlık aşaması
        cy.contains('Üye Ol').click() // When --> Eylemi gerçekleştirme (Üye ol linkine tıkla)
        cy.url().should('contain', 'account/register') // Then --> Testi doğrulama (Tıklanan linkte account/register bölümü olmalı)
    });
});