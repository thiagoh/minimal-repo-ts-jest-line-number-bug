module.exports = {
  transform: {
    // "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: ["**/*.spec.ts"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globalSetup: "./global-setup.js",
  globalTeardown: "./global-teardown.js",
  globals: {
    "ts-jest": {
      enableTsDiagnostics: true
    }
  }
};
