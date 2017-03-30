module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': ['.js'],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      /\.(css|svg|json)$/
    ]
  },
  rules: {
    // Static analysis
    'import/no-unresolved': ['error', {
      commonjs: true,
      caseSensitive: true
    }],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': ['off', {
      allow: [],
    }],
    'import/no-webpack-loader-syntax': 'error',
    // Helpful Warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false
    }],
    'import/no-mutable-exports': 'error',
    // Module Systems
    'import/unambiguous': 'off',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    // Style Guide
    'import/first': ['error', 'absolute-first'],
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', 'never', {
      js: 'never',
    }],
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index'
      ],
      'newlines-between': 'always'
    }],
    'import/newline-after-import': ['error', {
      count: 2
    }],
    'import/prefer-default-export': 'error',
    'import/max-dependencies': ['error', {
      max: 10
    }],
    'import/no-unassigned-import': 'error',
    'import/no-named-default': 'error'
  }
};
