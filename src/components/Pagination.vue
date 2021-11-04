<template>
  <div class="pagination_wrapper">
    <div class="btn" @click="onClick(currentPage - 1)">🠔</div>
    <div
      class="pages btn"
      :class="{ active: currentPage === i }"
      v-for="i in countPages"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </div>

    <div class="btn" @click="onClick(currentPage + 1)">🠖</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    countPagesInBase: Number,
    itemsOnPage: Number,
    currentPage: Number,
    paymentsCount: Number,
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.countPages) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
  computed: {
    countPages() {
      let res = Math.ceil(this.paymentsCount / this.itemsOnPage);
      if (res <= this.countPagesInBase) {
        return this.countPagesInBase;
      } else return res;
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
