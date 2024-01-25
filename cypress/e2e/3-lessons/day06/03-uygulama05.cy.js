/*
    https://automationteststore.com adresini ziyaret et
    Login ol
        Login Name = techpro
        Password = techpro!
    "Welcome back …" menüsündeki “Manage Address Book” seçeneğine tıkla
    Edit butonuna tıkla
    Formdaki tüm bilgileri değiştir ve kaydet
    Değişikliklerin uygulandığını doğrula
*/

describe('Eylem Komutları', () => {
    it('Eylem Komutları ile ilgili bir Uygulama', () => {
        cy.visit('https://automationteststore.com/');

        cy.get('#customer_menu_top').click();

        cy.get('#loginFrm').within(() => {
            cy.get('#loginFrm_loginname').type('techpro')
            cy.get('#loginFrm_password').type('techpro!')
            cy.get('button').click()
        })

        cy.get('#customer_menu_top').trigger('mouseover')
        cy.contains('Manage Address Book').click()
        /*
            Üstteki kod trigger('mouseover') metodu ile yazıldı.
            Eğer invoke('show') metodu ile yapmak istesek şu şekilde olurdu:
            
            cy.get("#customernav").find("[class='sub_menu dropdown-menu']").invoke("show");
            cy.contains("Manage Address Book").click();
        */
        
        cy.get('[title="Edit"]').click();

        cy.get('#AddressFrm_firstname').clear().type('Ayşe')
        cy.get('#AddressFrm_lastname').clear().type('Çimen')
        cy.get('#AddressFrm_company').type('Techpro')
        cy.get('#AddressFrm_address_1').clear().type('Bağlık mah. Tavşan sok. No:21')
        cy.get('#AddressFrm_city').clear().type('Ereğli')
        cy.get('#AddressFrm_country_id').select('Malaysia')
        cy.get('#AddressFrm_zone_id').select('1975')
        cy.get('#AddressFrm_postcode').clear().type('67000')
        cy.get('#AddressFrm_default0').check()
        cy.get('[title="Continue"]').click();

        cy.get('.alert').should('exist').and('contain', 'Your address has been successfully updated')

    });
});