module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  globals: {
    transform: {
      '^.+\\.tsx?$': ['ts-jest', { /* ts-jest config goes here in Jest */ }],
    },
  },
};
