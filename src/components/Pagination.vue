<template>
  <div class="pagination_wrapper">
    <div class="btn" @click="onClick(current - 1)">🠔</div>
    <div
      class="pages btn"
      :class="{ active: current === i }"
      v-for="i in amount"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </div>

    <div class="btn" @click="onClick(current + 1)">🠖</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: Number,
    current: Number,
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
};
</script>

<style lang="scss">
.pagination_wrapper {
  display: flex;
  background-color: rgb(248, 238, 238);
  font-size: 16px;
  .btn {
    cursor: pointer;
    margin: 10px;
  }
  .active {
    background-color: #ccc;
  }
}
</style>
