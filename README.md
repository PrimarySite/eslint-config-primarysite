# PrimarySite's approach to JavaScript

## Getting started

    $ yarn install eslint-config-primarysite

With your project's .eslintrc.js, extend 'primarysite'

    module.exports = {
      extends: 'primarysite'
    };

## To do

- When we support Node 10 in more places, turn the `prefer-named-capture-group` rule on.

- Remove the `ignoreElements` property from the `jsx-a11y/control-has-associated-label` rule when
  this issue is resolved: https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/566
