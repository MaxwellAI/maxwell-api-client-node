module.exports = {
    plugins: [
    ],
    env: {
        browser: false,
        es6: true,
        commonjs: true,
        node: true,
        mocha: true,
    },
    extends: [
      "eslint:recommended",
    ],
    rules: {
      "no-console": 0,
      "quotes": [
        "error",
        "single",
      ]
    }
};
