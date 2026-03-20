module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@docusaurus/Link': '<rootDir>/src/__mocks__/@docusaurus/Link.jsx',
    '@docusaurus/useDocusaurusContext': '<rootDir>/src/__mocks__/@docusaurus/useDocusaurusContext.js',
    '@theme/Layout': '<rootDir>/src/__mocks__/@theme/Layout.jsx',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
};
