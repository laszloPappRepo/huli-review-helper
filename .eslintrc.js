module.exports = {
  "extends": "airbnb",
  "env": {
    "jest": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": ["error", "never"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "no-var": 0,
    "prefer-template": 0,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0
  }
};
