describe("My Account", () => {
  const { faker } = require("@faker-js/faker");
  let fakeName = faker.person.firstName();
  let fakeLastname = faker.person.lastName();
  const randomDate = faker.date.birthdate();
  // Tarihi "yyyy/mm/dd" formatına çevirme fonksiyonu
  function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  // Oluşturulan rastgele tarihi al ve istenilen formata çevir
  const fakeBirthDate = formatDate(randomDate);

  function generateRandomAddress() {
    const address = `${faker.location.streetAddress()}`;
    return address;
  }
  const fakeAddress = generateRandomAddress();
  const fakePostcode = faker.location.zipCode();
  const fakeCity = faker.location.city();
  const fakeState = faker.location.state();
  const fakeGsm = faker.phone.number();
  function generateRandomGsm() {
    return fakeGsm.replace(/\D+/g, "");
  }
  const fakeGSMOnlyNumbers = generateRandomGsm(fakeGsm);
  const fakeEmail = faker.internet.email();
  const fakePassword = faker.internet.password();
  it("Favorilere bir ürün eklenmediğinde Favorites sayfasında henüz favorilerde ürün bulunmadığına dair mesaj olmalı", () => {
    const url = "https://practicesoftwaretesting.com/";
    // https://practicesoftwaretesting.com/ anasayfasına git
    // url ve title'ı kontrol et.
    cy.visit(url);
    cy.url().should("contain", "practicesoftwaretesting");
    cy.title().should("eq", "Practice Software Testing - Toolshop - v5.0");
    // "Sign in" butonuna tıkla
    cy.contains("Sign in").click();
    // "register your account" butonuna tıkla
    cy.contains("Register your account").click();
    // Formdaki tüm alanları geçerli bilgilerle doldur
    cy.get("#first_name").type(fakeName);
    cy.get("#last_name").type(fakeLastname);
    cy.get("#dob").type(fakeBirthDate);
    cy.get("#address").type(fakeAddress);
    cy.get("#postcode").type(fakePostcode);
    cy.get("#city").type(fakeCity);
    cy.get("#state").type(fakeState);
    cy.get("#country").select("US");
    cy.get("#phone").type(fakeGSMOnlyNumbers);
    cy.get("#email").type(fakeEmail);
    cy.get("#password").type(fakePassword);
    // Register butonuna tıkla
    cy.contains("Register").click();
    // Sign in ekranında yer alan email kısmına register'da kullanılan email'i gir
    cy.get("[placeholder='Your E-mail *']").type(fakeEmail);
    // Sign in ekranında yer alan password kısmına register'da kullanılan password'ü gir
    cy.get("#password").type(fakePassword);
    // Submit butonuna tıkla
    cy.get("[type='submit']").click();
    // My Account sayfasında bulunduğunu doğrula
    cy.get("h1").should("contain", "My account");
    // Favorites linkine tıklayın
    cy.get("[href='#/account/favorites']").click();
    // Favorites sayfasında bulunduğunu doğrula
    cy.get("h1").should("have.text", "Favorites");
    // Eklenmiş bir favori bulunmadığına dair mesajın görüntülendiğini doğrula
    cy.get("div[_ngcontent-ng-c2215768067]").should("contain", "There are no favorites yet. In order to add favorites, please go to the product listing and mark some products as your favorite.");
  });    
});
