import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/mocks/styleMock.ts",
    "^.+\\.svg$": "jest-svg-transformer"
  },
  testEnvironment: "jsdom",
};

export default config;
