module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      arrowFunctions: true,
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
}
