module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ]
  }
};
