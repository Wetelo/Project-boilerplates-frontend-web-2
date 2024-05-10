module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  settings: {
    tailwindcss: {
      callees: ['cva', 'cn'],
      config: './tailwind.config.ts',
    },
  },
  ignorePatterns: ['.next', '.eslintrc.cjs', 'postcss.config.mjs'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    'tailwindcss/no-arbitrary-value': 'warn',
  },
};
