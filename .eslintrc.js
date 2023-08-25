module.exports = {
  // dev: {
  //   userEslint: true
  // },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true

    // 'vue/setup-compiler-macros': true,
    // browser: true,
    // commonjs: true,
    // amd: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/comment-directive': 'off'
  },
  plugins: [
    'vue'
  ]
  // globals: {
  //   conmmon: true,
  //   GLOBALbaseURL: true,
  //   EDITOTPATH: true
  // }
}
