module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "App.tsx",
    "!src/**/types.ts",
  ],
  coverageThreshold: {
    global: {
     branches: 50,
    functions: 60,
    lines: 60,
    statements: 60,
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
