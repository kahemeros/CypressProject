/*
    https://automationteststore.com sitesine git
    'Contact Us' bağlantısına tıkla
    Kayıt formunu tamamla
    Kaydın gerçekleştiğini doğrula
*/

describe("Metot Zinciri", () => {
  it("Metot Zinciri Kullanımı", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".info_links_footer").contains("Contact Us").click();
    /*
        cy.get(".info_links_footer") ==> Daha sonra arayacağımız
        li tag'ına sahip Contact Us linkinin parent'ı durumundaki 
        elementin locate'ini almış olduk. Böylece arama alanını 
        daraltmış olduk. Bu bize bir çok li'den oluşan bir list verir.

        contains("Contact Us") ==> ul tag'ının altındaki li'lerden
        Contact Us linkini, metin arama (contains) üzerinden bulduk.
    */

    /*
        cy.get("#ContactUsFrm").within(() => {
             cy.get("[type='text']");
        });
        within() methodu ile ContactUsFrm id'sine sahip bir elementin
        içinde yer alan [type='text'] locate'ine sahip elementleri
        listelemiş olduk. Bu şekilde yapınca [type='text'] bize 2 adet
        locate vermiş oldu. Eğer within() fonksiyonunun dışına yazmış
        olsak bize 4 adet elemente verecekti, çünkü sayfada toplam 
        4 adet bu şekilde element var.
    */

    cy.get("#ContactUsFrm").within(() => {
      cy.get("#ContactUsFrm_first_name").type("Cypress");
      cy.get("#ContactUsFrm_email").type("cypress@gmail.com");
      cy.get("#ContactUsFrm_enquiry").type("Cypress is the best");
      cy.get("button[title='Submit']").click();
    });
    cy.get(".mb40")
      .find("p")
      .should("exist")
      .and("be.visible")
      .and("have.text", "Your enquiry has been successfully sent to the store owner!");
    // exist--> locate'i alınan elementin var olup olmadığını kontrol eder.
    // be.visible--> locate'i alınan elementin görünür olup olmadığını kontrol eder.
    // have.text / contain--> locate'i alınan elementin text değerini kontrol eder.
  });
});
