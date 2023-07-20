export default {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};
