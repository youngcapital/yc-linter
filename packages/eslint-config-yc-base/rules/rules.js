module.exports = {
  rules: {
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'error',
    'function-paren-newline': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'error',
    'max-len': ['error', { code: 120 }],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-mixed-operators': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-shadow': ['error'],
    'no-throw-literal': 'error',
    'no-underscore-dangle': 'off',
    'no-unreachable': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', 'nofunc'], // functions are hoisted
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'one-var': 'off',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': 'error',
    'semi': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error'
  }
};
