module.exports = {
  root: true,

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },

  ignorePatterns: ['node_modules', 'dist', '.output', '.nuxt', '*.js'],
};
