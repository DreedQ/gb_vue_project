<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.title]">My personal costs</div>
      </header>
      <main>
        <AddPaymentForm @addNewPayment="addNewPayment" />
        <PaymentsDisplay :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: rgb(243, 235, 235);
}
</style>
