const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio: true, // Cypress Studio kullanımı için bu ayarı açtık
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://practicesoftwaretesting.com/#",
    env: {
      signin: "auth/login", // baseUrl'in path parametrelerinden biri
      contact: "contact" // baseUrl'in path parametrelerinden biri
      // username: "Erdal" ==> username, password gibi data'larımızı da saklayabiliriz.
    }
  },
});
