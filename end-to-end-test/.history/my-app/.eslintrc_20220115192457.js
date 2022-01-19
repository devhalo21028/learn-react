module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    ecmaFeatures: {
        jsx: true
    },
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react/jsx-uses-react": "off",
"react/react-in-jsx-scope": "off"
  }
};
