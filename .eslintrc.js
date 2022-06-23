const path = require('path');

module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint:recommended', 'prettier', 'plugin:react-hooks/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      configFile: path.join(__dirname, '.babelrc')
    }
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-multiple-empty-lines': ['error'],
    "camelcase": ["error", { "allow": ["api_key"] }]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {},
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            moduleDirectory: ['node_modules', 'src/']
          }
        }
      }
    }
  ]
}
