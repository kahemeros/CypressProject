describe("Eylem Metotları - check() Metodu", () => {
  it("check() Metodunun Kullanımı", () => {
    cy.visit("https://www.letskodeit.com/practice");

    // CHECKBOX
    // Tümünü işaretle
    cy.get('[type="checkbox"][name="cars"]').check().should("be.checked");
    // cy.get() içinde checkbox'lardan oluşan bir liste var.
    // Bu listeye check() komutu verdiğimizde tüm checkbox'ları işaretler.
    // be.checked, işaretleme yapılıp yapılmadığını kontrol eder.

    // Tümünün işaretini kaldır
    cy.get('[type="checkbox"][name="cars"]').uncheck().should("not.be.checked");

    // İlkini seç
    cy.get('[type="checkbox"][name="cars"]').first().check();

    // Value ile seçme
    cy.get('[type="checkbox"][name="cars"]').check("benz");

    // Value ile seçimi kaldırma
    cy.get('[type="checkbox"][name="cars"]').uncheck("benz");

    // Value ile birden fazla seçim yapma
    cy.get('[type="checkbox"][name="cars"]').check(["benz", "honda"]);
    // çoklu seçim yaparken [] kullanılır.

    // Birden fazla seçim kaldırma
    cy.get('[type="checkbox"][name="cars"]').uncheck(["bmw", "benz", "honda"]);

    // RADIO BUTTONS
    // Seçim yapma
    cy.get('[type="radio"][name="cars"]').check();

    // Value ile seçme
    cy.get('[type="radio"][name="cars"]').check("benz");

    cy.get('[type="radio"][name="cars"]').uncheck("benz");
    // uncheck() metodu sadece checkbox'lar ile çalışır, radio buttonlar ile kullanılamaz
  });
});
