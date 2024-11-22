const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://challenge.primecontrol.com.br/',
    env: {
      user: 'wegnernando@gmail.com', // Email do login
      password: 'nando123', // Senha do login
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
