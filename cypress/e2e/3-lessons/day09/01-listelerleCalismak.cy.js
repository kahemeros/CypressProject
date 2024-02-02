describe("Listelerle Çalışmak", () => {
  it.only("Kitap Yurdu - each() ve wrap() metotlarının kullanımı", () => {
    // each() => Locate'ini aldığımız bir list elementin (aynı for döngüsü gibi
    // her bir elementini döndürüyor. Örneğin kitapyurdu sitesinde "En Çok Satanlar"
    // bölümünüde yer alan 10 kitabı listeleyebilir, içlerinde bir kitabın
    // olup olmadığını kontrol edebiliriz.

    cy.visit("https://www.kitapyurdu.com");
    cy.get(".bestseller-cr")
      .find(".name")
      .each(($kitapBasligi, index) => {
        cy.log(index + 1 + "- " + $kitapBasligi.text());
        cy.wrap($kitapBasligi).should("be.visible");
      });
    /*
        EACH METHODU:
        -  cy.get(".bestseller-cr").find(".name") = cy.get(".bestseller-cr .name");
        -  En çok satılanlar listesinin içindeki en çok satılan 10 adet kitabın adı var listemizde.
        -  Sonrasında each metodu ile bu kitap başlıkları arasında gezebiliyoruz.
        -  each methodu içinde bir değişken ve arrow function oluşturuyoruz.
        -  Değişkene isim verirken başına $ işareti koymanın avantajları var, bu şekilde alışmak gerek.
        -  arrow function'ın içinde, liste halinde elimizde bulunan web elementlerle ilgili ne yapmak istiyorsak onu yapıyoruz.
        -  Bu örnekte console'da yazdırmak istedik. Web elementleri text'e dönüştürmek için text() methodunu (konsolda text olarak gösterimi için) kullandık.
        -  Console'da yazdırılacak kitap başlıklarının başına numara eklemek için index değişkeni ekledik, 1'den başlaması için de index+1 yazdık log ekranına. Ancak index kullanımı bu dersin ana konusu değil, önemli olan each() kullanımını öğrenmek.
    */

    /*
        WRAP METHODU
        - wrap() methodu ise $kitapBasligi değişkeni içinde yer alan JQuery nesnemiz üzerinde Cypress komutlarını uygulayabilmemizi sağlıyor.
        - Yani each() methodu ile liste haline getirip teker teker dolaştığımız web elementleri, wrap() methodu ile Cypress objesine dönüştürmüş oluyoruz.
        - Yukarıdaki örnekte should("be.visible") ile $kitapBasligi değişkeni içinde yer alan her bir kitap başlığının görünür olup olmadığını doğruladık.
        - Aynı şekilde click(), type() vb. Cypress komutlarını wrap() methodu sayesinde kullanabiliyoruz. Bir nevi get() methpdu gibi çalışıyor.

    */

    /*  > ve BOŞLUK (SPACE BAR) ile LOCATE ALMA
        - Locate alırken parent-child ilişkisi içinde arama yaparken > kullanılır.
        - Torunlardan biri aranacaksa boşluk (space bar) bırakırız iki locate arasında
        - Dolayısıyla yukarıdaki locate'i şu şekilde de yazabilirdik:
            cy.get(".bestseller-cr .name"); => bestseller.cr class'ı altında yer alan 
            name class'ına ait öğeleri getirir (name class'ı diğerinin torunu)
    */
  });
  it("Tool Shop - each() ve wrap() metotlarının kullanımı", () => {
    cy.visit("https://practicesoftwaretesting.com/#/");
    cy.get(".col-md-9 .card-title").each(($urun) => {
      // anasayfada yer alan 9 tane ürünü listeledik, $urun adlı değişkenin içine yükledik
      cy.log($urun.text()); // log() ve text() fonksiyonları ile $urun değişkeni içindeki ürünleri console'a yazdırdık.
      cy.wrap($urun)
        .invoke("text") // Elementin text özelliğini alır, böylece should("contain") tarzı sorgulamalar yapılabilir hale gelir.
        .should("exist")
        .and("have.length.gte", 3); // Text en az 3 karakterli mi doğrulaması ($urun list'i içindeki her bir eleman için)
    });
  });
});
