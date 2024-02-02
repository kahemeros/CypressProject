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
  it("Favorilere bir ürün eklendiğinde Favorites sayfasında ürün olduğuna dair mesaj olmalı", () => {
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
    // Tool Shop Demo linkine tıkla
    cy.get("#Layer_1").click();
      // Tool Shop Demo sayfasında yer alan ürünlerden herhangi birine tıkla
      // cy.get('[data-test="product-01HNARABGM8N1Y81HH34JW39XM"] > .card-img-wrapper > .card-img-top')
      const listOfFirstPageProducts = cy.get("div[class='container'][data-test]>.card");
      listOfFirstPageProducts[0].click();
      //const firstProduct = listOfFirstPageProducts.filter((item) => { item[0] });
      //firstProduct.click();
    // Açılan sayfada 'Add to favourites' butonuna tıklayın
    //cy.get("btn-add-to-favorites").click();
  });
});
