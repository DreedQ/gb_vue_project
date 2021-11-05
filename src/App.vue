<template>
  <div id="app">
    <nav>
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/notfound">Not Found!</router-link>
    </nav>
    <header>
      <router-link to="/add/payment/Food/value=500"
        >Add payment: Food - 500</router-link
      >
      /
      <router-link to="/add/payment/Transport/value=50"
        >Add payment: Transport - 50</router-link
      >
      /
      <router-link to="/add/payment/Entertainment/value=2000"
        >Add payment: Entertainment - 2000</router-link
      >
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      page: 1,
      count: 3,
      pageNum: 1,
      // pagesCount: 0,
    };
  },
  created() {
    this.$router.push({ name: "Dashboard" });
    this.$store.dispatch("fetchData", this.pageNum);
    this.$store.dispatch("loadPageCount");
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: rgb(243, 235, 235);
}
</style>
