module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
      "document": false
    },
    "rules": {
      "no-unused-vars": 1,
      "react/prefer-es6-class": 1,
      "react/jsx-filename-extension": 1,
      "import/prefer-default-export": 1,
      "react/forbid-prop-types": 1,
      "react/no-unused-prop-types": 1
    }
};