describe("Listelerle Çalışmak", () => {
  it("Kitap Yurdu - Arama listesindeki ürün başlıklarını doğrulama", () => {
    cy.visit("https://www.kitapyurdu.com");
    let arananKelime = "java"
    cy.get("#search-input").type(`${arananKelime}{enter}`);
    cy.get("#product-table .name").each(($urunAdi) => { // locate'i alınan 20 adet kitabı $urunAdi adlı değişkenin içine ekledik.
      cy.wrap($urunAdi)
        .invoke("text")
        .then(($listedekiBaslik) => {
          // cy.wrap($urunAdi) bir web element. İçinde, each() methodu ile gezdiğimiz "java" arama sonucunu içeren 20 adet web element var. Bize bunların text'i lazım Bunun için invoke("text") methodunu kullanıyoruz. Eğer bu methodu kullanmazsak elementin text'ini değil, tagname'ini class name'ini vs. alır.  
          // cy.wrap($urunAdi).invoke("text") ile text özelliğini kullanılabilir hale getirdiğimiz $urunAdi içindeki kitap başlıklarını $listedekiBaslik adlı değişkenin içine ekledik.Böylelikle JS Query elemanına dönüştü ve JS komutları uygulanabilir hale geldi.Biz bunlardan toLowerCase()'i kullanacağız. Çünkü kitapyurdu arama kutusunda java diye arama yaptığımızda bazı sonuçlar Java bazılarıysa JAVA olarak geldi. Hepsini küçük harfe dönüştürüp standart hale getirdik ki sorgulama doğru sonuçlar versin.
          expect($listedekiBaslik.toLowerCase()).to.include(arananKelime);
        });
    });
    // 4. satırda yer alan kod şu şekilde de yazılabilirdi:
    // cy.get(".product-list").find(".name").each($urunAdi)... (find methodunun kullanımı)
    /*
      - Bu örnekte odaklanılması gereken yer each() ve wrap() kullanımı.
      - each() methodu ile (aynı forEach() methodunda olduğu gibi) locate'ini aldığımız web elementler arasında gezebiliyoruz.
      - wrap() methodu ile de liste olarak elimizde bulunan web elementleri Cypress objesine dönüştürüyor ve Cypress methodlarını uygulayabiliyoruz.
    */
  });
});
