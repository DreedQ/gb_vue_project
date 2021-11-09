<template>
  <div id="app">
    <nav>
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/notfound">Not Found!</router-link> /
      <router-link to="/calculator">Calculator</router-link>
    </nav>
    <header>
      <router-link to="/add/payment/Food/value=500">Add: Food/500</router-link>
      /
      <router-link to="/add/payment/Transport/value=50"
        >Addt: Transport/50</router-link
      >
      /
      <router-link to="/add/payment/Entertainment/value=2000"
        >Add: Entertainment/2000</router-link
      >
    </header>

    <main>
      <router-view />
      <transition name="fade">
        <ModalWindow
          v-if="modalName"
          :modalName="modalName"
          :modalWindowSettings="modalWindowSettings"
        />
      </transition>
      <transition name="fade">
        <context-menu
          :changeActionShow="changeActionShow"
          :itemToChange="item"
        />
      </transition>
    </main>
  </div>
</template>

<script>
import ContextMenu from "./components/ContextMenu.vue";
import ModalWindow from "./components/ModalWindow.vue";

export default {
  name: "App",
  components: {
    ModalWindow,
    ContextMenu,
  },
  data() {
    return {
      item: {},
      page: 1,
      count: 3,
      pageNum: 1,
      modalName: "",
      modalWindowSettings: {},
      changeActionShow: false,
    };
  },

  methods: {
    onShown(settings) {
      this.modalName = settings.name;
      this.modalWindowSettings = settings;
      // console.log(this.ModalWindoW);
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
    // this.$router.push({ name: "Dashboard" });
    this.$store.dispatch("fetchData", this.pageNum);
    this.$store.dispatch("loadPageCount");
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: rgb(243, 235, 235);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
