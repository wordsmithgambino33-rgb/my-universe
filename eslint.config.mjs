
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-undef': ['error', { typeof: true }], // Allow dynamic imports
      'import/no-unresolved': 'off' // Ignore tsparticles import issues
    }
  }
]