module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "import",
    "node",
    "prefer-let",
    "jsx-a11y",
    "jest",
    "row-num",
    "test-num",
    "prettier",
  ],
  ignorePatterns: [
    "**/eslint-plugin-row-num/rules/utils/**",
    "**/dist/**",
    "**/tap/**",
    "**/types/**",
    "perf-ref.umd.js",
    "perf-ref.esm.js",
  ],
  rules: {
    "node/no-unsupported-features/node-builtins": [
      "error",
      {
        ignores: ["worker_threads"],
      },
    ],
    "node/no-unsupported-features/es-builtins": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        ignores: ["modules", "dynamicImport"],
      },
    ],
    "node/no-unpublished-require": "error",
    "node/no-extraneous-require": "error",
    "node/no-missing-require": "error",
    "node/global-require": "error",

    "prefer-let/prefer-let": "error",

    "import/newline-after-import": "error",
    "import/order": "off",

    "array-callback-return": "off",
    "consistent-return": "off",
    "no-console": "off",
    "prefer-const": "off",
    "no-nested-ternary": "off",
    "row-num/correct-row-num": "error",
    "test-num/correct-test-num": "off",
    "import/extensions": "off",
    "no-shadow": "off",

    "@typescript-eslint/no-shadow": ["error"],
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.base.json", "./packages/*/tsconfig.json"],
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      rules: {
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/lines-between-class-members": [
          "error",
          "always",
          {
            exceptAfterSingleLine: true,
          },
        ],
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: false,
            classes: false,
            variables: false,
          },
        ],
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/dot-notation": [
          "error",
          {
            allowKeywords: true,
          },
        ],
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/explicit-function-return-type": "off",

        "lines-between-class-members": "off",
        "no-useless-constructor": "off",
        "no-unused-expressions": "off",
        "no-dupe-class-members": "off",
        "no-use-before-define": "off",
        "object-curly-spacing": "off",
        "func-callspacing": "off",
        "no-invalid-this": "off",
        "no-unused-vars": "off",
        "prefer-const": "off",
        "no-redeclare": "off",
        "dot-notation": "off",
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
    {
      files: ["**/test/**/*.+(js|ts)?(x)", "**/*.{spec,test}.+(js|ts)?(x)"],
      rules: {
        // adapted from eslint-config-kentdodds/jest.js
        "jest/consistent-test-it": "off",
        "jest/expect-expect": "off",
        "jest/lowercase-name": "off",
        "jest/max-nested-describe": "error",
        "jest/no-alias-methods": "off",
        "jest/no-commented-out-tests": "warn",
        "jest/no-conditional-expect": "error",
        "jest/no-deprecated-functions": "error",
        "jest/no-disabled-tests": "warn",
        "jest/no-done-callback": "error",
        "jest/no-duplicate-hooks": "off",
        "jest/no-export": "error",
        "jest/no-focused-tests": "error",
        "jest/no-hooks": "off",
        "jest/no-identical-title": "error",
        "jest/no-if": "off",
        "jest/no-interpolation-in-snapshots": "error",
        "jest/no-jasmine-globals": "off",
        "jest/no-jest-import": "error",
        "jest/no-large-snapshots": ["warn", { maxSize: 300 }],
        "jest/no-mocks-import": "error",
        "jest/no-restricted-matchers": "off",
        "jest/no-standalone-expect": "off",
        "jest/no-test-prefixes": "error",
        "jest/no-test-return-statement": "off",
        "jest/no-truthy-falsy": "off",
        "jest/prefer-called-with": "error",
        "jest/prefer-expect-assertions": "off",
        "jest/prefer-hooks-on-top": "error",
        "jest/prefer-inline-snapshots": "off",
        "jest/prefer-spy-on": "off",
        "jest/prefer-strict-equal": "off",
        "jest/prefer-to-be-null": "off",
        "jest/prefer-to-be-undefined": "off",
        "jest/prefer-to-contain": "warn",
        "jest/prefer-to-have-length": "warn",
        "jest/prefer-todo": "warn",
        "jest/require-to-throw-message": "off",
        "jest/require-top-level-describe": "off",
        "jest/unbound-method": "off",
        "jest/valid-expect": "error",
        "jest/valid-expect-in-promise": "error",
        "jest/valid-title": "warn",
      },
    },
    {
      files: ["**/test/**/*.ts?(x)", "**/*.{spec,test}.ts?(x)"],
      rules: {
        "@typescript-eslint/unbound-method": "off",
        "jest/unbound-method": "error",
      },
    },
  ],
};
