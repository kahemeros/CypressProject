describe("Eylem Metorları - type() ve clear() Metotları", () => {
  it.only("type() ve clear() Metotlarının Kullanımı", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    // Yukarıdaki komut bazı sitelere girişte karşılaşılan uncaught error hatası ile karşılaşmamak için.
    // Özellikle demoqa.com sitesine girişte bu hata ile karşılaşılabiliyor.
    // it bloğunun içine, visit satırının hemen öncesine yazıyoruz bu komutu.
    cy.visit("https://www.letskodeit.com/practice");

    // NORMAL ŞEKİLDE METİN EKLEME
    // cy.get("#enabled-example-input").type("Techpro")

    // OPTION İLE KULLANMA
    // FORCE
    // cy.get("#disabled-button").click();
    // cy.get("#enabled-example-input").type("Techpro", { force: true });
    // Bir üst satırda disabled butonu tıklandığı için input alanına
    // text giremiyoruz. Ancak option kullanarak {force:true} komutunu
    // girdiğimizde alana text girebiliyoruz.

    // SEQUENCE
    // cy.get("#enabled-example-input").type("Techpro{selectAll}{backspace}", { delay: 750 });
    // {backspace} => type komutu ile girdiğimiz metinden bir karakter siler.
    // {selectAll} => type komutu ile girdiğimiz metnin tamamını seçer.
    // {selectAll}{backspace} => girdiğimiz metnin tamamını seçip backspace
    // yaptığımızda, bu defa metnin tamamını siler.
    // {delay:1000} => her karaktere tuşlama arasınd 1 sn (1000 ms) bekler.
    cy.get("#disabled-button").click();
    cy.get("#enabled-example-input").type("Techpro", { force: true });
    cy.wait(3000); // => komutlar arasında belirtilen süre kadar bekler.
    cy.get("#enabled-example-input").clear({ force: true });
    // clear() => type ile girdiğimiz metni silmeye yarar.
    // clear() içindeki {force:true} => öncesinde disabled butonuna basıldığı için input'un içine
    // text girilmesi veya silinmesi mümkün değil. Bu yüzden {force:true} komutu ile
    // Cypress'a hata kontrolü yapma diyoruz.
  });

  it("Kitapyurdu Arama Motorunda Sequence Kullanımı", () => {
    cy.visit("https://www.kitapyurdu.com");
    cy.get("#search-input").type("Haçlı Seferleri Tarihi{enter}");
    // Kitapyurdu sitesi arama motoruna girilen metni Enter tuşu ile arar.
  });
});
