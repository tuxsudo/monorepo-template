module.exports = {
  notify: true,
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)(spec|test).js?(x)"],
  setupFiles: ["raf/polyfill"]
};
