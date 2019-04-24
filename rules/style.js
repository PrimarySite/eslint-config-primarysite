module.exports = {
  rules: {
    'array-bracket-newline': [
      'error',
      {
        multiline: true
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': [
      'error',
      {
        multiline: true
      }
    ],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      'error',
      {
        properties: 'always'
      }
    ],
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: 'webpackChunkName',
        ignoreConsecutiveComments: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: true
      }
    ],
    'func-names': ['error', 'as-needed'],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    'function-paren-newline': ['error', 'multiline'],
    'id-blacklist': ['error', 'id'],
    'id-length': [
      'error',
      {
        exceptions: ['e'],
        min: 3
      }
    ],
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: [
      'error',
      2,
      {
        CallExpression: { arguments: 1 },
        flatTernaryExpressions: false,
        FunctionDeclaration: { body: 1, parameters: 0 },
        ImportDeclaration: 1,
        MemberExpression: 1,
        SwitchCase: 1
      }
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
        mode: 'strict'
      }
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'line-comment-position': [
      'error',
      {
        position: 'above'
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
      'error',
      {
        afterBlockComment: false,
        afterLineComment: false,
        allowArrayEnd: true,
        allowArrayStart: true,
        allowBlockEnd: true,
        allowBlockStart: true,
        allowClassEnd: true,
        allowClassStart: true,
        allowObjectEnd: true,
        allowObjectStart: true,
        beforeBlockComment: true,
        beforeLineComment: false
      }
    ],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': [
      'error',
      {
        max: 4
      }
    ],
    'max-len': [
      'error',
      {
        code: 100,
        comments: 79,
        ignoreRegExpLiterals: true,
        ignoreUrls: true
      }
    ],
    'max-lines': ['error', 500],
    'max-lines-per-function': [
      'error',
      {
        IIFEs: true,
        max: 50,
        skipBlankLines: false,
        skipComments: true
      }
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 15],
    'max-statements-per-line': [
      'error',
      {
        max: 1
      }
    ],
    'multiline-comment-style': ['error', 'separate-lines'],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': [
      'error',
      {
        capIsNew: true,
        newIsCap: true,
        properties: true
      }
    ],
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2
      }
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: false
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1
      }
    ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-restricted-syntax': 'off',
    'no-tabs': [
      'error',
      {
        allowIndentationTabs: false
      }
    ],
    'no-ternary': 'off',
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: false,
        skipBlankLines: false
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterSuper: false,
        allowAfterThis: false,
        enforceInMethodNames: true
      }
    ],
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: false
      }
    ],
    'object-property-newline': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block-like',
          'case',
          'cjs-export',
          'class',
          'default',
          'do',
          'export',
          'for',
          'function',
          'if',
          'iife',
          'multiline-block-like',
          'multiline-expression',
          'return',
          'switch',
          'try',
          'while',
          'with'
        ]
      },
      {
        blankLine: 'never',
        prev: '*',
        next: 'directive'
      },
      {
        blankLine: 'always',
        prev: [
          'block-like',
          'cjs-import',
          'const',
          'directive',
          'let',
          'multiline-block-like',
          'multiline-expression'
        ],
        next: '*'
      },
      {
        blankLine: 'never',
        prev: 'return',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'break',
        next: 'case'
      },
      {
        blankLine: 'never',
        prev: 'directive',
        next: 'directive'
      },
      {
        blankLine: 'never',
        prev: 'case',
        next: 'return'
      },
      {
        blankLine: 'never',
        prev: 'switch',
        next: 'case'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        numbers: false,
        unnecessary: true
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'semi-style': ['error', 'last'],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true
      }
    ],
    'sort-vars': [
      'error',
      {
        ignoreCase: true
      }
    ],
    'space-before-blocks': [
      'error',
      {
        classes: 'always',
        functions: 'always',
        keywords: 'always'
      }
    ],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        nonwords: false,
        overrides: {},
        words: true
      }
    ],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'template-tag-spacing': 'error',
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off'
  }
};
