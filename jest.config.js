module.exports = {
  notify: true,
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)(spec|test).js?(x)"],
  setupFiles: ["raf/polyfill", "<rootDir>/setup/babel-polyfill.js"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/packages/[^/]*/lib/"]
};
