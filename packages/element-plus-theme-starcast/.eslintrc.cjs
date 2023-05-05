/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  'extends': ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-typescript', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  }
};