<template>
  <div class="header">
    <b-container class="d-flex align-items-center justify-content-between">
      <div class="logo">Vue JS</div>
      <ul id="nav">
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/blog" tag="li" exact>
          <a>Blog</a>
        </router-link>
        <router-link to="/about" tag="li" exact>
          <a>About</a>
        </router-link>
        <router-link to="/help" tag="li" replace>
          <a>Help</a>
        </router-link>
      </ul>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;

  .logo {
    font-size: 24px;
    padding: 20px;
    /* width: 200px; */
  }

  ul {
    display: flex;
    margin: 0;

    li {
      padding: 20px;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          color: #ccc;
        }
      }
    }
  }
}
</style>
