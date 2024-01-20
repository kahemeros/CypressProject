/*
https://automationteststore.com adresini ziyaret et
Login ol
    Login Name = techpro
    Password = techpro!
"Login" butonuna tıkla
"Welcome back" metni ile login işleminin başarılı olduğunu kontrol et
*/
describe('Uygulama-03', () => {
    it('CSS Selector Kullanımı', () => {
        // https://automationteststore.com adresini ziyaret et
        cy.visit('https://automationteststore.com');
        cy.url().should('contain', 'automationteststore');
        cy.title().should('eq', 'A place to practice your automation skills!');
        /*
        Login ol
            Login Name = techpro
            Password = techpro!
        */
        cy.contains('Login or register').click();
        // text ile locate almak için [cy.get() yerine] kullanılır.
        cy.get('[id=loginFrm_loginname]').type('techpro');
        cy.get('[id=loginFrm_password]').type('techpro!');

        // "Login" butonuna tıkla
        cy.get('[title=Login]').click();
        // "Welcome back" metni ile login işleminin başarılı olduğunu kontrol et
        cy.get('[class="menu_text"]').should('contain', 'Welcome back');
        // should('contain.text', 'Welcome back') de kullanılabilirdi.
    });
});