describe("Uygulama-07", () => {
  it("Tools Shop - Geçerli verilerle siteye giriş yapılabilmeli", () => {
    /*
     https://practicesoftwaretesting.com/#/auth/login
     Geçerli verilerle siteye giriş yapılabildiğini doğrulayın
    */

    cy.visit("https://practicesoftwaretesting.com/");
    cy.get("[data-test='nav-sign-in']").click();
    cy.readFile("dosyalar/email.txt").then((email) => {
      cy.get("#email").type(email);
    });
    /*
    - Daha önce dosyalar/email.txt dosyasına kaydetmiş olduğumuz email'i
    sign-in ekranında kullanabilmek için readFile() methodunu kullanıyoruz.
    - cy.readFile("dosyalar/email.txt").then((email) ->
    dosyalar/email.txt'de yer alan datayı, email değişkeninin için yükledik.
    - cy.get("#email").type(email) -> Yüklediğimiz değişkeni, id'si email ("#email")
    olan web elemente type yoluyla gönderdik.
    */
    cy.readFile("dosyalar/password.txt").then((password) => {
      cy.get("#password").type(password);
    });
    cy.get("[type='submit']").click();
  });
});
