<template>
  <div :class="[$style.wrapper]">
    <button @click="showAddForm = !showAddForm">ADD NEW COST+</button>
    <div v-if="showAddForm">
      <input placeholder="Date" v-model="date" type="date" />
      <select-category v-model="category" />
      <input placeholder="Amount" v-model="amount" type="number" />
      <!-- <input placeholder="Type" v-model="type" /> -->
      <button @click="onSaveClick">Save!</button>
    </div>
  </div>
</template>

<script>
import SelectCategory from "./SelectCategory.vue";

export default {
  components: { SelectCategory },
  name: "AddPaymentForm",
  data() {
    return {
      amount: "",
      date: "",
      category: "",
      showAddForm: false,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSaveClick() {
      const today = new Date();
      const data = {
        id: today.getMilliseconds(),
        value: +this.amount,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: #fff;
}
</style>
