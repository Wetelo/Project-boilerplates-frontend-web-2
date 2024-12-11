import globals from 'globals';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import tailwindcss from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-plugin-prettier';
import query from '@tanstack/eslint-plugin-query';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      tailwindcss,
      prettier,
      query,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,

      ...react.configs.flat.recommended.rules,

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      ...tailwindcss.configs.recommended.rules,
      'tailwindcss/no-arbitrary-value': 'warn',

      ...prettier.configs.recommended.rules,

      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
          allowObjectTypes: 'never',
        },
      ],
    },
    settings: {
      tailwindcss: {
        callees: ['cva', 'cn'],
        config: './tailwind.config.ts',
      },
      react: {
        version: 'detect',
      },
    },
  },
];
