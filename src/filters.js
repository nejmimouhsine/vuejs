import Vue from "vue";

// Uppercase
Vue.filter("uppercase", v => v.toUpperCase());

// Shorten text
Vue.filter(
  "shorten",
  (v, textLength, suffix) => v.substring(0, textLength) + suffix
);
