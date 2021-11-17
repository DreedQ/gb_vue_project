<template>
  <v-app>
    <v-app-bar app flat color="teal">
      <v-btn small plain :ripple="false" dark to="/dashboard">Dashboard</v-btn>
      <v-btn small plain :ripple="false" dark to="/about">About</v-btn>
      <v-btn small plain :ripple="false" dark to="/calculator"
        >Calculator</v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      item: {},
      changeActionShow: false,
    };
  },
  methods: {
    onShown(settings) {
      this.modalName = settings.name;
      this.modalWindowSettings = settings;
    },
    onHide() {
      this.modalName = "";
      this.modalWindowSettings = {};
    },
    openChangeItem(item) {
      this.item = item;
      console.log(item);
      this.changeActionShow = !this.changeActionShow;
    },
    closeChangeMenu() {
      this.changeActionShow = false;
    },
  },
  mounted() {
    this.$modal.EventBus.$on("shown", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
    this.$contextMenu.EventBus.$on("shownChangeItem", this.openChangeItem);
  },
  created() {
    this.$router.push({ name: "Dashboard" });
    this.$store.dispatch("fetchDataList");

    this.$store.dispatch("fetchData");
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("shown", this.onShown);
    this.$modal.EventBus.$off("hide", this.onHide);
    this.$contextMenu.EventBus.$off("shownChangeItem", this.openChangeItem);
  },
};
</script>
