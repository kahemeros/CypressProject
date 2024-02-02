describe("fixture() - Çoklu Data Kullanımı", () => {
  let dataSeti;
  before(() => {
    cy.visit("https://www.kitapyurdu.com");
    cy.fixture("kitapyurdu2").then((veriler) => {
      dataSeti = veriler; // before() blok içinde yer alan veriler değişkenini, it() blokları içinde kullanabilmek için describe seviyesinde dataSeti adında bir variable oluşturduk ve ona cy.fixture() içindeki veriler variable'ını eşitledik.
    });
  });
  it("Kitapyurdu - Arama kelimelerinin testi", () => {
    dataSeti.forEach((testData) => {
      cy.get("#search-input").type(testData.kelime);
      /*
        dataSeti isimli variable içinde 3 adet json data var. json dosyası şu şekilde: 
        [
            {"kelime": "java"},
            {"kelime": "javascript"},
            {"kelime": "cypress"}
        ]
        Aynı key'e sahip 3 farklı value olduğu için forEach() methodunu kullanarak döngü içinde her seferinde farklı value'ları alıp arama kutusuna ekliyoruz böylece. dataSeti olarak describe içinden aldığımız değişkeni forEach() methodu uygulayıp tüm dataları testData isimli değişkene yükledik (JS dersinde bunlara item da diyorduk, ism önemsiz). cygt satırında ise forEach() döngüsü ile oluşturduğumuz yeni variable üzerinden type() methodunu uygulayabildik.
      */
      cy.get(".button-search").click();
      cy.get(".search-heading-title").should("contain", testData.kelime);
      cy.get("#search-input").clear();
      // Bu işlemler de aynı döngünün içinde yer aldığından onları da forEach() methodu içine yazdık.
    });
  });
});
