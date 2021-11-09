<template>
  <div :class="[$style.wrapper]">
    <div>
      <input placeholder="Date" v-model="date" type="date" />
      <select-category v-model="category" />
      <input placeholder="Amount" v-model="amount" type="number" />
      <button @click="onSaveClick">Save!</button>
    </div>
  </div>
</template>

<script>
import SelectCategory from "./SelectCategory.vue";

export default {
  name: "AddPaymentForm",
  components: { SelectCategory },
  data() {
    return {
      amount: "",
      date: "",
      category: "",
    };
  },

  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${y}.${m}.${d}`;
    },
  },
  methods: {
    onSaveClick() {
      const today = new Date();
      const data = {
        id: today.getMilliseconds(),
        value: +this.amount,
        category: this.category,
        date: this.getCurrentDate || this.date,
      };
      if (this.date && this.amount && this.category) {
        // this.$emit("addNewPayment", data);
        this.$modal.addPayment(data);
      }
    },
  },
  watch: {
    $route() {
      const categoryRout = this.$route.params.category;
      if (categoryRout) {
        this.category = categoryRout;
      }

      const value = this.$route.params.amount;
      if (value) {
        this.amount = +value;
      }

      if (this.category || this.amount) {
        this.showAddForm = true;
        this.date = this.getCurrentDate;
        console.log(this.date);
      }
    },
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: #fff;
}
</style>
