<template>
  <div :class="[$style.wrapper]">
    <button @click="showAddForm = !showAddForm">ADD NEW COST+</button>
    <div v-if="showAddForm">
      <input placeholder="Amount" v-model="amount" />
      <input placeholder="Type" v-model="type" />
      <input placeholder="Date" v-model="date" />
      <button @click="onSaveClick">Save!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      amount: "",
      type: "",
      date: "",
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
      const data = {
        value: +this.amount,
        category: this.type,
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
