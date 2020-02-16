module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    //'eslint:recommended',
    //'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'warn',
    'vue/html-self-closing': 'off',
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line":"off",
    "vue/mustache-interpolation-spacing":"off",
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
