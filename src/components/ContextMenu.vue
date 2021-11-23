<template>
  <v-container>
    <v-card-text class="text-h5 text-center pt-3">
      Correct Your Payment
    </v-card-text>
    <v-card class="align-center" plain flat :ripple="false">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="itemToChange.date"
            label="Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="itemToChange.date"
          @input="menu = false"
          color="teal"
        ></v-date-picker>
      </v-menu>
      <v-combobox
        v-model="itemToChange.category"
        :items="getCategoryList"
        label="Category"
        clearable
        color="teal"
      ></v-combobox>
      <v-text-field
        v-model="itemToChange.value"
        type="number"
        label="Amount"
        color="teal"
      ></v-text-field>
      <v-btn @click="saveChange">Save!</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ContextMenu",
  data() {
    return {
      items: [],
      // shown: false,
      caller: "",
      amount: "",
      date: "",
      category: "",
      menu: false,
    };
  },
  props: { itemToChange: Object },
  methods: {
    // onClose() {
    //   this.items = [];
    //   // this.shown = false;
    //   // this.changeActionShow = false;
    // },
    saveChange(item) {
      this.$emit("changeItemInDB", item);
      this.$contextMenu.hide();
    },
  },
  computed: { ...mapGetters(["getCategoryList"]) },
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
