<template>
  <div class="context" v-if="shown">
    <div class="context_item" v-for="item in items" :key="item.item">
      <button @click="item.action" class="context_item-btn">
        {{ item.text }}
      </button>
    </div>
    <div v-if="changeActionShow">
      <input placeholder="Date" v-model="itemToChange.date" type="date" />
      <select-category v-model="itemToChange.category" />
      <input placeholder="Amount" v-model="itemToChange.value" type="number" />
      <button @click="saveChange">Save!</button>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from "../store/index";
import SelectCategory from "./SelectCategory.vue";
export default {
  name: "ContextMenu",
  components: { SelectCategory },
  data() {
    return {
      items: [],
      shown: false,
      caller: "",
      amount: "",
      date: "",
      category: "",
    };
  },
  props: { changeActionShow: Boolean, itemToChange: Object },
  methods: {
    onShown({ items, caller }) {
      //   console.log(items, caller);
      this.items = { ...items };
      this.caller = caller;
      this.shown = true;
    },
    onClose() {
      this.items = [];
      this.shown = false;
      this.changeActionShow = false;
    },
    saveChange(item) {
      this.$emit("changeItemInDB", item);
      this.$contextMenu.hide();
      this.changeActionShow = false;
    },
  },
  mounted() {
    this.$contextMenu.EventBus.$on("shown", this.onShown);
    this.$contextMenu.EventBus.$on("hide", this.onClose);
  },
  beforeDestroy() {
    this.$contextMenu.EventBus.$off("shown", this.onShown);
    this.$contextMenu.EventBus.$off("hide", this.onClose);
  },
};
</script>

<style lang="scss" scoped>
.context {
  position: absolute;
  background: #eee;
  cursor: pointer;
}
.context_item-btn {
  margin: 8px;
  width: 65px;
  height: 25px;
  border: 1px solid rgb(199, 3, 3);
}
</style>
