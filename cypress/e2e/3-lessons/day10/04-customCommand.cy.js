describe("Custom Command", () => {
  // url: https://magento.softwaretestingboard.com
  // email: aedyn.kewon@fixedfor.com
    // password: *9kjceG5*TSWXhb
    let loginDetails;
    before(() => {
        cy.fixture("magentoLoginCredentials").then((loginCredentials) => {
            loginDetails = loginCredentials;
        })
    });
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com");
  });
  it("Magento - Geçerli verilerle login olma testi", () => {
    cy.magentoLogin(loginDetails.validEmail, loginDetails.validPassword);
  });

  it("Magento - Geçersiz kullanıcı adı ile login olma testi", () => {
    cy.magentoLogin(loginDetails.invalidEmail, loginDetails.validPassword);
  });
  it("Magento - Geçersiz şifre ile login olma testi", () => {
    cy.magentoLogin(loginDetails.validEmail, loginDetails.invalidPassword);
  });
  it("Magento - Geçerli kullanıcı adı ve geçersiz şifre login olma testi", () => {
    cy.magentoLogin(loginDetails.invalidEmail, loginDetails.invalidPassword);
  });
});
