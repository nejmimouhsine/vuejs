import Vue from "vue";

// Make Bold custom directive
Vue.directive("bold", {
  bind: el => {
    el.style.fontWeight = "bold";
  }
});

// Make Dynamic Font Size custom directive
Vue.directive("font", {
  bind: (el, binding) => {
    el.style.fontSize = binding.value + "px";
  }
});

// Make Format custom directive
Vue.directive("format", {
  bind: (el, binding) => {
    el.style.fontSize = binding.value + "px";

    // Bold modifier
    if (binding.modifiers.bold) {
      el.style.fontWeight = "bold";
    }

    // Orange modifier
    if (binding.modifiers.orange) {
      el.style.color = "orange";
    }
  }
});
