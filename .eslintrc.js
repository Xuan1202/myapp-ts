module.exports = {
  // "parser": "@typescript-eslint/parser",
  // "plugins": ["@typescript-eslint"],
  // "extends": ["plugin:@typescript-eslint/recommended"],
  "extends": [
    // 'airbnb-standard',
    'standard',
    // "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "root": true,
  "parserOptions": {
    "project": "tsconfig.json",
    // "tsconfigRootDir": "__dirname",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "ecmaVersion": 2020
    }
  },
  "ignorePatterns": ["/*.*"],
  "rules": {
    "no-var": 1, // 禁用var，用let和const代替
    "camelcase": 2, // 强制驼峰法命名
    "no-catch-shadow": 2, // 禁止catch子句参数与外部作用域变量同名
    "no-class-assign": 2, // 禁止给类赋值
    "no-cond-assign": 2, // 禁止在条件表达式中使用赋值语句
    "no-console": ["error", { allow: ["info","warn", "error"] }], // 使用console 规则

    "semi": ["error", "always"], // 代码需要以分号结尾
    "quotes": [
      "error",
      "single"
    ], // 单引号
    "linebreak-style": [
      0,
      "error",
      "windows"
    ],
    // "react/jsx-one-expression-per-line": 0,
    "comma-dangle": ["error", "always"],
  }
}