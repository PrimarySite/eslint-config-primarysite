module.exports = {
  rules: {
    'block-spacing': ['error', 'always'],

    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],

    'camelcase': ['error', {
      'properties': 'always'
    }],

    'comma-dangle': ['error', 'never'],

    'comma-spacing': ['error', {
      after: true,
      before: false
    }],

    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],

    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: true
    }],

    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',

    // Finish filling this in
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],

    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: strict
    }],

    'keyword-spacing': ['error', {
      after: true,
      before: true
    }],

    'linebreak-style': ['error'], 'unix'],
    'semi': ['error', 'always'],

    'semi-spacing': ['error', {
      after: true,
      before: false
    }],
  }
};
