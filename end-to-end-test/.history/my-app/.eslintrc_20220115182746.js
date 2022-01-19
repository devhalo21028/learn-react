module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript', 
    'react-app'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
