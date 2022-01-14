module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module'
    },
    parser: '@babel/eslint-parser',
    rules: {
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        curly: ['error', 'multi-line', 'consistent'],
        'dot-location': ['error', 'property'],
        'handle-callback-err': 'off',
        'max-nested-callbacks': ['error', { max: 4 }],
        'max-statements-per-line': ['error', { max: 2 }],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-empty-function': 'error',
        'no-floating-decimal': 'error',
        'no-inline-comments': 'error',
        'no-lonely-if': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
        'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
        'no-trailing-spaces': ['error'],
        'no-var': 'error',
        'object-curly-spacing': ['error', 'always'],
        'prefer-const': 'error',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'semi-spacing': ['error', { after: true, before: false }],
        'semi-style': ['error', 'last'],
        'no-extra-semi': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        yoda: 'error'
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended']
    // 略
}
