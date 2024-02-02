const { faker } = require("@faker-js/faker");

/*
Base URL: https://practicesoftwaretesting.com/
*/
describe("Uygulama -06", () => {
  it("Tool Shop - Geçerli verilerle siteye kayıt olunabilmeli", () => {
    /*
     https://practicesoftwaretesting.com/#/auth/register
     Geçerli verilerle kayıt olunabildiğini doğrulayın
    */
    let email = faker.internet.email();
    cy.writeFile("dosyalar/email.txt", email);
    /*
    - Bu it() blokunda oluşturduğumuz email verisini, diğer test bloklarında da kullanabilmek için
    bu veriyi cypress ana dosyasında yer alan dosyalar isimli klasörün altına email.txt dosyası olarak
    kaydediyoruz. 
    - Klasörü de dosyayı da manuel olarak oluşturmuyoruz, kod çalıştığı zaman otomatikmen
    kendisi oluşuyor. 
    - Daha sonra başka test blokundan readFile() yaparak bu veriyi kullanabileceğiz.
    - writeFile()-> ilk parametre dosya yolu ve dosya adını, ikinci parametre ise kaydetmek istediğimiz
    veriyi gösteriyor.
    - Bu kod ikinci kez çalıştığında, ilk yazılan veriyi siler, ikincisini kaydeder.
    */
    let password = faker.internet.password({ length: 6 });
    cy.writeFile("dosyalar/password.txt", password);

    cy.visit("https://practicesoftwaretesting.com/");
    cy.get("[data-test='nav-sign-in']").click();
    cy.get("[data-test='register-link']").click();
    cy.get("[data-test='register-form']").within(() => {
      cy.get("#first_name").type(faker.person.firstName());
      // unique data gerekmeyen yerlerde faker kullanmaya gerek yok aslında.
      // Ancak uygulama olması açısından burada faker kullanacağız.
      // faker'ı ilk kullanacağımız yerde type(faker) kodunu girdiğimizde
      // gelen seçeneği Enter ile seçtiğimizde, faker kütüphanesini import ediyoruz.
      // faker kullandığımız zaman sonunu () ile bitirmeyi unutmamak gerek.
      cy.get("#last_name").type(faker.person.lastName());
      cy.get("#dob").type("1980-12-12");
      cy.get("#address").type(faker.location.streetAddress());
      cy.get("#postcode").type(faker.location.zipCode());
      cy.get("#city").type(faker.location.city());
      cy.get("#state").type(faker.location.state());
      cy.get("#country").select(faker.number.int({ min: 0, max: 150 }));
      // country seçerken dropdown menüde select() komutunu metin veya value ile de kullanabilirdik
      // option ile kullanma seçenekleri faker.number.int yazdıktan sonra ekranda kendiliğinden çıkıyor
      cy.get("#phone").type(faker.number.int({ min: 1000000000, max: 9999999999 }));
      cy.get("#email").type(email);
      cy.get("#password").type(password);
      cy.get("[data-test='register-submit']").click();
      // cy.get("button").click() de çalışırdı, sayfada başka button yok.
      /*
      Register butonuna tıkladıktan sonra, kaydın başarıyla sonuçlandığına dair bir mesaj gelmiyor.
      Veya My Account sayfasına da götürmüyor, Sign In ekranına götürüyor. Bu aslında bir hatadır, 
      kullanıcıya kaydın gerçekleştiğine dair bir mesajın verilmesi gerekir. 

      Ancak şimdilik Login başlığının bulunduğu sayfaya yönlendirdiğinden doğrulamayı bunun üzerinden
      yapabiliriz.
      */
    });
    cy.get("h3").should("be.visible").and("contain", "Login");
  });
});
