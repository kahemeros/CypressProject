describe("Eylem Metotları - click() Metodu", () => {
  it("click() Metodunun Kullanımı", () => {
    cy.visit("https://www.letskodeit.com/practice");
    // ELEMENTİN MERKEZİNE TIKLAMA
    cy.get("#opentab").click();

    // ELEMENTİN FARKLI KONUMLARINA TIKLAMA
    // cy.get("#opentab").click("topLeft");
    // cy.get("#opentab").click("topRight");
    // cy.get("#opentab").click("left");
    // cy.get("#opentab").click("center");
    // cy.get("#opentab").click("right");
    // cy.get("#opentab").click("bottom");
    // cy.get("#opentab").click("bottomRight");
    // cy.get("#opentab").click("bottomLeft");

    // KOORDİNAT BELİRTEREK TIKLAMA
    // cy.get("#opentab").click(10, 10); // (ilk parametre x, ikinci parametre y)
    // cy.get("#opentab").click(-20, -20, { force: true });
    // locate'inin aldığımız elementin dışında bir alana tıklamak istiyorsak
    // x ve y için negatif değerli pikselleri girdikten sonra (elementin sol üst
    // tarafına tekabül ediyor) {force:true} komutunu giriyoruz. Böylece Cypress
    // locate'in bir bölgesine karşılık gelmeyen (negatif değerlerle yaptığımız)
    // konumLandırma için hata vermiyor. force: hata kontrolünü yok sayma işlemi

    // BİRDEN ÇOK ELEMENTE TIKLAMA
    cy.get("[name='cars'][type='checkbox']").click({ multiple: true });
    // click() tek bir elemente tıklar.
    // Yukarıdaki örnekte olduğu gibi birden fazla elemente aynı anda
    // click yapmak istersek (çünkü <<"[name='cars'][type='checkbox']">> 3 element
    // döndürüyor) click methodunun içine option olarak {multiple:true}
    // giriyoruz.

    // TIKLANACAK ELEMENTİ SAYFANIN İSTENEN BÖLÜMÜNE KAYDIRMA
    cy.get("#mousehover").click({ scrollBehavior: "top" });
    // {scrollBehavior: "top"} ==> locate'i alınan elementi sayfanın en üstüne taşır.
    // Böylece o elementin üstüne gelindiğinde ortaya çıkan menü seçeneklerini
    // görüntüleyebiliriz. {scrollBehavior: "center"} ise locate'i alınan elementi
    // sayfanın ortasına getirir.
  });
});
