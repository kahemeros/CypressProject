const { faker } = require("@faker-js/faker");
describe("fixture() Methodu", () => {
  it("Kitap Yurdu - fixture() Methodunun Kullanımı", () => {
    cy.visit("https://www.kitapyurdu.com");
    cy.fixture("kitapyurdu").then((veriDosyasi) => {
      // POM yapısına uygun olarak testlerde kullanacağımız datalarımızı bundan sonra fixture folder altında yer alan json uzantılı dosyalardan çağıracağız. Bunun için cy.fixture() methodunu kullanıyoruz. Bu örnekte fixture folder altında yer alan kitapyurdu.json dosyasında yer alan data'ya ihtiyacımız var. cy.fixture("kitapyurdu") ile dosya adını yazarak json dosyamızı çağırıyoruz. Sonrasında then() fonksiyonunu kullanarak json dosyasında bulunan tüm datayı veriDosyasi adını verdiğimiz bir değişkenin içine gönderiyoruz. Sonraki satırda yer alan type() methodu içine bu defa veriDosyasi içinden hangi value bize lazımsa onun key değerini yazıyoruz (veriDosyasi.kelime)
      cy.get("#search-input").type(veriDosyasi.kelime);
      cy.get(".button-search").click();
      cy.get("#product-table .name").each(($urunAdi) => {
        cy.wrap($urunAdi)
          .invoke("text")
          .then(($listedekiBaslik) => {
            cy.wrap($urunAdi).invoke("text");
            expect($listedekiBaslik.toLowerCase()).to.include(veriDosyasi.kelime);
          });
      });
    });
  });
  it.only("Tool Shop - Geçerli verilerle siteye kayıt olunabilmeli", () => {
    /*
     https://practicesoftwaretesting.com/#/auth/register
     Geçerli verilerle kayıt olunabildiğini doğrulayın
    */

    cy.visit("https://practicesoftwaretesting.com/");
    let jsonData = {
      // fixtures folder altındaki toolshop.json dosyasına kaydedilmek üzere bir json dosyası oluşturduk, faker class kullanarak email ve şifre ürettik.
      email: faker.internet.email(),
      password: faker.internet.password({ length: 6 }),
    };
    cy.writeFile("cypress/fixtures/toolshop.json", jsonData); // Ürettiğimiz jsonData değişkenini toolshop.json dosyasının relative path'ini alarak oraya yazdırdık. Bu it blokunun içinde aşağıda yer alan ilgili yerlerde de bu jsonData değişkeni üzerinden email ve password'ü çağırıp kullandık.

    cy.get("[data-test='nav-sign-in']").click();
    cy.get("[data-test='register-link']").click();
    cy.get("[data-test='register-form']").within(() => {
      cy.get("#first_name").type(faker.person.firstName());
      cy.get("#last_name").type(faker.person.lastName());
      cy.get("#dob").type("1980-12-12");
      cy.get("#address").type(faker.location.streetAddress());
      cy.get("#postcode").type(faker.location.zipCode());
      cy.get("#city").type(faker.location.city());
      cy.get("#state").type(faker.location.state());
      cy.get("#country").select(faker.number.int({ min: 0, max: 150 }));
      cy.get("#phone").type(faker.number.int({ min: 1000000000, max: 9999999999 }));
      cy.get("#email").type(jsonData.email);
      cy.get("#password").type(jsonData.password);
      cy.get("[data-test='register-submit']").click();
    });
    cy.get("h3").should("be.visible").and("contain", "Login");
  });
  it.only("Tool Shop - fixture() Methodu ile Login Olma", () => {
    cy.visit("https://practicesoftwaretesting.com/");

    cy.get("[data-test='nav-sign-in']").click();

    cy.fixture("toolshop").then((loginVeriDosyasi) => {
      cy.get("#email").type(loginVeriDosyasi.email);
      cy.get("#password").type(loginVeriDosyasi.password);
    });

    cy.get("[type='submit']").click();
  });
});
