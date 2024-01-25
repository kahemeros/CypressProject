describe('Eylem Metotları - selectFile() Metodu', () => {
    it('selectFile() Metodunun Kullanımı', () => {
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html');

        // Dosya Seç butonu ile ekleme yapma
        // cy.get('#myFile').selectFile('package.json')

        // Sürükle-Bırak ile ekleme yapma
        cy.get('#myFile').selectFile('package.json', {action:"drag-drop"})

    });
});