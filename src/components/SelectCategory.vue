<template>
  <div>
    <input
      placeholder="New Category"
      name="category"
      list="category"
      :value="value"
      @change="onChange($event)"
    />
    <datalist :value="value" id="category">
      <option selected v-for="(option, idx) in getCategoryList" :key="idx">
        {{ option }}
      </option>
    </datalist>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SelectCategory",
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
  },
  methods: {
    ...mapActions(["loadCategories"]),
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
  },
};
</script>

<style></style>
