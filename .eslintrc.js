module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  extends: ['@react-native', 'plugin:react/recommended'],
};
