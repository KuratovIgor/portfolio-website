module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'import/no-unresolved': 'off',
    'no-plusplus': 'off',
    'import/extensions': [
      'error',
      'never',
    ],
    'no-restricted-syntax': ['error', 'BinaryExpression[operator=\'in\']'],
    'vue/multi-word-component-names': 'off',
  },
}
