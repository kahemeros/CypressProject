describe('Mouseover Islemi', () => {
    /*
        invoke('show') metodu; CSS ile yazılmış mouseover özellikli
        sayfalar için, (manuel olarak) mouseover yapıldığında açılan
        menü içeriğini (çoğunlukla linkler) göstermeye yarar.

        trigger('mouseover') metodunda üzerine mouse'un getirilmesi
        istenen element hangisiyse onun locate'i alınır.

        invoke('show') metodunda ise mouse üzerine getirildiğinde
        gösterilen (başlangıçta gizli) linkleri toplu olarak
        kapsayan element locate edilir.
    */
    it('invoke() Metoduyla Mouseover', () => {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#mousehover').scrollIntoView()
        cy.get('[class="mouse-hover-content"]').invoke('show')
        // Burada alınan locate, sayfada gördüğümüz Mouse Hover
        // başlıklı elementin locate'i değil. Onun altında gizlenmiş
        // durumda bulunan ve mouse üzerine getirildiğinde ancak
        // görülebilir hale gelen (Top ve Reload linklerine sahip)
        // (gizli) linkleri kapsayan genel yapının locate'ini aldık.
        cy.get('[href="#top"]').click();
        // Sonrasında da invoke('show') komutuyla görülebilir
        // hale gelen linklerden istediğimizin locate'ini alıp
        // click yaptık.

    });

    it.only('invoke() Metoduyla Mouseover - eBay Sitesi', () => {
        cy.visit('https://www.ebay.com/');
        cy.get('#gh-eb-My-o').invoke('show')
        // My eBay elementi altında, ancak üzerine mouseover yapıldığında
        // görünür hale gelen 10 adet link var. Bu linklerin toplu
        // olarak bağlı olduğu yapının locate'ini aldık ve bu 10 linki
        // görünür hale getirdik.
        cy.contains(' Messages').click()
    });
});