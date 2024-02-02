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

describe("Register", () => {
  const url = "https://practicesoftwaretesting.com/";
  it("Geçerli verilerle kayıt olunabilmeli", () => {
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
    // Başarıyla giriş yapıldığını doğrula
    cy.get("#user-menu").should("contain", fakeName);
  });

  it("6'dan az karakterli şifre ile kayıt olunamamalı", () => {
    const fakePasswordFiveDigits = faker.internet.password({ length: 5 });
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
    // Şifre 5 haneli olsun
    cy.get("#phone").type(fakeGSMOnlyNumbers);
    cy.get("#email").type(fakeEmail);
    cy.get("#password").type(fakePasswordFiveDigits);
    // Register butonuna tıkla
    cy.contains("Register").click();
    // Giriş yapılamadığını doğrula
    cy.get("[class='alert alert-danger mt-3']").should("have.text", " Password must be minimal 6 characters long. ");
  });

  it("Aynıı e-posta adresi ile kayıt olunamamalı", () => {
    const preUsedEmail = "cypress@gmail.com";
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
    // Email kısmına daha önce Register işleminde kullanılmış bir email gir
    cy.get("#email").type(preUsedEmail);
    cy.get("#password").type(fakePassword);
    // Register butonuna tıkla
    cy.contains("Register").click();
    // Email hesabının daha önce Register işleminde kullanıldığına dair uyarı çıktığını doğrula
    cy.get(".help-block").should("contain", "A customer with this email address already exists.");
  });
  it.only("Zorunlu alanlar boş bırakıldığında uyarı mesajları görüntülenmeli", () => {
    const preUsedEmail = "cypress@gmail.com";
    // https://practicesoftwaretesting.com/ anasayfasına git
    // url ve title'ı kontrol et.
    cy.visit(url);
    cy.url().should("contain", "practicesoftwaretesting");
    cy.title().should("eq", "Practice Software Testing - Toolshop - v5.0");
    // "Sign in" butonuna tıkla
    cy.contains("Sign in").click();
    // "register your account" butonuna tıkla
    cy.contains("Register your account").click();
    // Form alanlarını boş bırakıp doğrudan Register butonuna tıkla
    cy.contains("Register").click();
    // First name kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" First name is required. ").should("contain", "First name is required.");
    // Last name kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" Last name is required. ").should("contain", "Last name is required.");
    // Date of birth kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" Date of Birth is required. ").should("contain", "Date of Birth is required.");
    // Address kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" Address is required. ").should("contain", "Address is required.");
    // Postcode kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" Postcode is required. ").should("contain", "Postcode is required.");
    // City kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" City is required. ").should("contain", "City is required.");
    // State kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" State is required. ").should("contain", "State is required.");
    // Country kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" Country is required. ").should("contain", "Country is required.");
    // Phone kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" Phone is required. ").should("contain", "Phone is required.");    
    // E-mail kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" E-mail is required. ").should("contain", "E-mail is required.");
    // Password kutusunun boş bırakılamayacağına dair uyarı mesajının görüntülendiğini doğrula
    cy.contains(" Password is required. ").should("contain", "Password is required.");
  });
});
