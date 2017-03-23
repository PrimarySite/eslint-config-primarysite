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
  rules: {
    'import/no-unresolved': ['error', {
      commonjs: true,
      caseSensitive: true
    }],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error'    
  }
};
