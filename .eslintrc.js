module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/jsx-runtime', // To allow the new JSX transform from React 17 (not needed in scope)
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  rules: {
    'linebreak-style': 'off',
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 3,
      },
    ],
  },
};
