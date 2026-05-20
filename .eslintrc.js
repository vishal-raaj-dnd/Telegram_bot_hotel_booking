module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {
    // Enforce explicit return types on functions
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // Disallow unused variables
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Prevent accidental use of `any`
    '@typescript-eslint/no-explicit-any': 'warn',
    // Require await on async functions
    '@typescript-eslint/require-await': 'error',
    // No floating promises
    '@typescript-eslint/no-floating-promises': 'error',
  },
  ignorePatterns: ['dist/', 'node_modules/', '*.js'],
};
