describe('Eylem Metotları - trigger() Metodu', () => {
    it('trigger() Metodunun Kullanımı', () => {
        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#mousehover').trigger('mouseover')
        cy.wait(3000)
        /* 
         Mouseover eğer JS ile kodlanmışsa trigger() fonksiyonu sorunsuz çalışır.
         Bu özellik CSS ile kodlanmışsa, mouseover özelliğinin altında yer alan
         linklerden hangisine tıklamak istiyorsak onun locate'ini alıyoruz ve 
         click() fonksiyonunu {force:true} opsiyonu ile birlikte kullanıyoruz.
         Aşağıda örneği var.

         Mouseover eğer CSS ile kodlanmış ise yapılabilecek bir diğer şey, invoke()
         metodunu kullanmak. Bir sonraki dersin konusu.
        */       

        cy.get('[href="#top"]').click({force:true});

    });

    it.only('trigger() Metodunun Kullanımı - Amazon Sitesi', () => {
        cy.visit('https://www.amazon.com/');

        cy.get('#icp-nav-flyout').trigger('mouseover')
        /*
        Bu örnekteki Amazon sayfasında yer alan mouseover özelliği JS ile yazıldığı
        için trigger('mouseover') metodunu kullanabildik.
        */

    });
});