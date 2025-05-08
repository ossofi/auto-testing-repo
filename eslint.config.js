// eslint.config.js
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha, // includes describe, it, before, after, etc.
      },
    },
    rules: {
      // Code style
      quotes: ['error', 'single'],
      'max-len': ['error', { code: 120 }],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],

      // Variables
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      camelcase: ['error', { properties: 'always' }],

      // Functions
      'arrow-spacing': ['error', { before: true, after: true }],
      'space-before-function-paren': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'no-console': 'warn',

      // Logic
      eqeqeq: ['error', 'always'],
      'no-else-return': 'error',
      curly: ['error', 'all'],
      'no-fallthrough': 'error',
      'default-case': 'error',

      // Security
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-prototype-builtins': 'error',

      // ES6+
      'prefer-arrow-callback': 'error',
      'no-duplicate-imports': 'error',
      'template-curly-spacing': ['error', 'never'],
      'rest-spread-spacing': ['error', 'never'],

      // Misc
      'no-debugger': 'warn',
      'no-undef': 'error',
      'consistent-return': 'error',
    },
  },
]);
