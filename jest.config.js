module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // testRegex: '(//.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  //   testPathIgnorePatterns: ['/*.*.ts/'],
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}
