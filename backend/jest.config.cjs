module.exports = {
  preset: 'ts-jest/presets/default-esm', // Avisa que o TS deve ser convertido para ESM
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }], // Traduz arquivos .ts usando ESM
  },
  extensionsToTreatAsEsm: ['.ts'], // Trata arquivos .ts como módulos modernos
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Resolve problemas de extensão .js em imports do TS
  },
};