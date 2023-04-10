import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    verbose: true,
    modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    displayName: 'test',
    testMatch: ['<rootDir>/test/**/*.spec.ts'],
};

export default config;