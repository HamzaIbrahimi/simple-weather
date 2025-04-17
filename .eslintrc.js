module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    quotes: ['error', 'single'],
    'no-console': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    camelcase: ['error', { properties: 'never' }],
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
