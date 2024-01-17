/*
    01. https://www.kitapyurdu.com sitesine git,
    02. 'Üye Ol' bağlantısına tıkla
    03. Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
*/

describe('Uygulama-01', () => {
    it('Temel fonksiyonların kullanımı', () => {
        // 01. https://www.kitapyurdu.com sitesine git
        cy.visit('https://www.kitapyurdu.com');
        // 02. 'Üye Ol' bağlantısına tıkla
        cy.get('.register > a').click()
        // 03. Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
        cy.get('#register-name').type('Erdal').should('have.value','Erdal')
        // have.value --> attribute değerini gösterir, sayfayı inspect yaptığımızda value attribute'ünün value'sunu gösterir. (input alanına girdiğimiz değerler value attribute'üne value olarak eklenir)
        // should'dan sonraki ilk parametre actual, ikinci değer expected
    });
});
