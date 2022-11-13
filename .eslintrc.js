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
    'no-restricted-syntax': ['error', 'BinaryExpression[operator=\'in\']'],
    'vue/multi-word-component-names': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
  },
}
