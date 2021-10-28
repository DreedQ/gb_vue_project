<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.title]">My personal costs</div>
      </header>
      <main>
        <AddPaymentForm @addNewPayment="addNewPayment" />
        <PaymentsDisplay :items="currentElements" />
        <Pagination
          @paginate="changePage"
          :length="paymentsList.length"
          :current="page"
          :n="count"
        />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      page: 1,
      count: 10,
    };
  },
  methods: {
    addNewPayment(data) {
      this.addPayment(data);
      this.checkExist(data, this.categoryList, this.addCategory);
    },
    checkExist(data, getter, setter) {
      const list = getter;
      if (list.includes(data.category, 0)) {
        return;
      } else setter(data.category);
    },
    ...mapMutations({
      updatePayments: "setPaymentsListData",
      addPayment: "addDataToPaymentsList",
      addCategory: "addCaregoryToCategoryList",
    }),
    // ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
    },
  },
  computed: {
    ...mapGetters({
      categoryList: "getCategoryList",
      paymentsList: "getPaymentsList",
    }),
    currentElements() {
      console.log(this.paymentsList);
      const { count, page } = this;
      return this.paymentsList.slice(count * (page - 1), count * (page - 1) + count);
    }
  },
  created() {
    // this.updatePayments(this.fetchData());
    this.$store.dispatch("fetchData");
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: rgb(243, 235, 235);
}
</style>
