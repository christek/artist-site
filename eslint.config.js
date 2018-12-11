/*
Licensed Materials - Property of IBM
5724-Q36
(c) Copyright IBM Corp. 2018
US Government Users Restricted Rights - Use, duplication or disclosure
restricted by GSA ADP Schedule Contract with IBM Corp.
*/

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-intl',
    'flowtype',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-tabs': 2,
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-body-style': [
      2,
      'as-needed',
    ],
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/href-no-hash': 2,
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'padded-blocks': 0,
    'prefer-template': 2,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [
      2,
      'multiline',
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-target-blank': 0,
    'react/no-find-dom-node': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react-intl/string-is-marked-for-translation': 2,
    'require-yield': 0,
    'import/no-webpack-loader-syntax': 0,
    'flowtype/boolean-style': [
      2,
      'boolean',
    ],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [
      2,
      'always-multiline',
    ],
    'flowtype/generic-spacing': [
      2,
      'never',
    ],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': [2, {
      any: false,
      Object: true,
      Function: true,
    }],
    'flowtype/object-type-delimiter': [
      2,
      'comma',
    ],
    'flowtype/require-parameter-type': 0,
    'flowtype/require-return-type': 0,
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [
      2,
      'always',
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always',
    ],
    'flowtype/space-before-generic-bracket': [
      2,
      'never',
    ],
    'flowtype/space-before-type-colon': [
      2,
      'never',
    ],
    'flowtype/type-id-match': [
      2,
      '^([A-Z][a-z0-9]+)+$',
    ],
    'flowtype/union-intersection-spacing': [
      2,
      'always',
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
  },
  overrides: [
    {
      files: ['**/*.spec.js'],
      rules: {
        'react-intl/string-is-marked-for-translation': 0,
      },
    },
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
