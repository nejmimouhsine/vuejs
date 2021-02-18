<template>
  <div class="post-box">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title" v-font="30">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">
      {{ content | shorten(30, " ...") }}<a href="#">Read More</a>
    </p>
    <b-row>
      <b-col col sm="6">
        <span class="post-author">{{ author }}</span>
      </b-col>
      <b-col col sm="6" class="text-right">
        <span class="post-category">{{ category | uppercase }}</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: "post"
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  border-radius: 10px;
  margin-bottom: 20px;

  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #4caf50;
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }

  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }

  .post-content {
    line-height: 1.8;
    color: #666;
  }

  .post-author {
    background-color: #607d88;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }

  .post-category {
    background-color: #e91e63;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
}
</style>
