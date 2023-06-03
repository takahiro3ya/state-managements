module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  globals: {
    module: false, // module に対する not defined の警告を抑止
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "unused-imports",
    "import",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    // https://github.com/sweepline/eslint-plugin-unused-imports
    // eslint-plugin-unused-imports の使用にともない off に設定
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    // "react/no-unknown-property": ["error", { ignore: ["css"] }], // add - for emotion
    "react/no-unescaped-entities": 0,
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      // "error",
      "warn",
      {
        // グループの順番
        groups: [
          // 'builtin' 組み込みモジュール
          // 'external' yarn add したパッケージ
          // 'internal' 自作モジュール
          // 'parent' 親階層のファイル
          // 'sibling' 同階層のファイル
          // 'index', 同階層の index ファイル
          "builtin",
          ["external", "internal"],
          ["parent", "sibling"],
          ["object", "type", "index"],
        ],
        // グループの間に空行追加
        "newlines-between": "always",
        // グループの pattern 判定に影響されないグループを設定
        pathGroupsExcludedImportTypes: ["builtin"],
        // ABC 順。大文字小文字を区別しない
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          // react 関連を先頭に
          {
            pattern: "react**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "parent",
            position: "before",
          },
          // {
          //   pattern: "{@/components/**,@/pages/**}",
          //   group: "internal",
          //   position: "before",
          // },
          // css modules は一番最後にする
          {
            pattern: "./**.module.css",
            group: "index",
            position: "after",
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
