<template>
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
        :countPages="currentPages"
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      page: 1,
      count: 3,
      pageNum: 1,
      // pagesCount: 0,
    };
  },
  methods: {
    addNewPayment(data) {
      this.addPayment(data);
      //   this.checkExist(data, this.categoryList, this.addCategory);
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
    changePage(p) {
      this.page = p;
      this.$store.dispatch("fetchData", this.page);
    },
    ...mapActions({
      fetchDataList: "fetchData",
    }),
  },
  computed: {
    ...mapGetters({
      categoryList: "getCategoryList",
      paymentsList: "getPaymentsList",
      getPages: "getPageCount",
    }),
    currentElements() {
      // console.log(this.paymentsList);
      const { count, page } = this;
      return this.paymentsList.slice(
        count * (page - 1),
        count * (page - 1) + count
      );
    },
    currentPages() {
      // console.log(this.getPages)
      return this.getPages;
    },
  },
  mounted() {
    const page = this.$route.params.page;
    if (page) {
      this.page = Number(page);
    }
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: rgb(243, 235, 235);
}
</style>
