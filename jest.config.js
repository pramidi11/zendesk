module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/*.test.*'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 100,
      lines: 90,
      statements: 90
    }
  }
};
