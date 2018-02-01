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
    'import/core-modules': [],
    'import/extensions': ['.js'],
    'import/ignore': [
      'node_modules',
      /\.(css|svg|json)$/
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': ['error', 'never', {
      js: 'never',
    }],
    'import/first': ['error', 'absolute-first'],
    'import/max-dependencies': ['error', {
      max: 10
    }],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': ['error', {
      count: 1
    }],
    'import/no-absolute-path': ['error', {
      amd: true,
      commonjs: true,
      esmodule: true
    }],
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'error',
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false
    }],
    'import/no-internal-modules': ['off', {
      allow: [],
    }],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': ['error', {
      allow: ['*.css']
    }],
    'import/no-unresolved': ['error', {
      caseSensitive: true,
      commonjs: true
    }],
    'import/no-webpack-loader-syntax': 'error',
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
    'import/prefer-default-export': 'error',
    'import/unambiguous': 'off'
  }
};
