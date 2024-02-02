describe("Hook nedir", () => {
  // before() hook => ilk test başlamadan önce 1 kez çalışır, sadece 1 kez çalışır. snippet: bf
  before(() => {
    cy.log("Bu bir before hook blokudur, tüm testlerden önce 1 kez çalışır");
  });
  // after() hook => Tüm testler tamamlandıktan sonra 1 kez çalışır, sadece 1 kez  çalışır. snippet: af
  after(() => {
    cy.log("Bu bir after hook blokudur, tüm testlerden sonra çalışır");
  });
  // beforeEach() hook => Her testten önce çalışır, ne kadar test varsa o kadar çalışır. snippet: bfe

  beforeEach(() => {
    cy.log("Bu bir beforeEach hook blokudur, her testten önce çalışır");
  });

  // afterEach() blok => Her testten sonra çalışır, ne kadar test varsa o kadar çalışır. snippet: afe
  afterEach(() => {
    cy.log("Bu bir afterEach() hook blokudur, her testten sonra çalışır");
  });

  it("Test1", () => {
    cy.log("Test 1");
  });
  it("Test2", () => {
    cy.log("Test 2");
  });
  it("Test3", () => {
    cy.log("Test 3");
  });
  // BEFORE BLOK KULLANIM ALANLARI: Örneğin, her testimiz anasayfadaysa, before blok içine cy.visit(url) yapabiliriz. Böylelikle her test blokunda ayrı ayrı cy.visit(url) yapmak zorunda kalmayız.
  // Aynı şekilde, tüm testlerimizde kullanacağımız fake datalarımız varsa, bunları da before blok içinde oluşturup, takip eden testlerde kullanabiliriz.
  // Veritabanı bağlantısı yapmak istediğimizde kullanabiliriz.
  // Biz testlerimizde before'dan before each bloku daha çok kullanıyoruz.
  // AFTER BLOK KULLANIM ALANLARI: Veritabanı bağlantısını kesmek istediğimizde kullanabiliriz.
  // Yine aynı şekilde, örneğin before blok ile username ve password kullanarak anasayfaya giriş yapıp, tüm testleri koşturabilir, sonrasında after blok ile sign out yapabiliriz.
  // BEFORE EACH BLOK KULLANIM ALANLARI: Siteyi ziyaret etme, login işlemleri gerçekleştirme gibi her testten önce yapılması gereken işlemler varsa bunların beforeEach blok içinde yapılması mantıklıdır. Ancak, yukarıda değinildiği üzere, bunlarda kullanılacak fake datalar varsa, bunları da before blok içinde üretiriz.
  // AFTER EACH BLOK KULLANIM ALANLARI: Örneğin her testimizin sonunda sign out işlemi yapmak istiyorsak bu kodları afterEach() blok içinde yazabiliriz. Pek kullanılan bir blok değildir. En çok beforeEach() ve before() blok kullanırız.
});
