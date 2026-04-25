module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'], // Crítico: trata .ts como módulo
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true, // Força o ts-jest a manter o formato de módulos
      },
    ],
  },
};