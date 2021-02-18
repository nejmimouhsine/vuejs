<template>
  <div class="Help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageName: "Help",
      pageDescription: "This is Help page"
    };
  },
  name: "help"
};
</script>
