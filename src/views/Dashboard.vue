<template>
  <div :class="[$style.wrapper]">
    <header>
      <div :class="[$style.title]">My personal costs is {{ getFullCoast }}</div>
    </header>
    <main>
      <button @click="openModal">ADD NEW COST+</button>
      <!-- <AddPaymentForm @addNewPayment="addNewPayment" /> -->
      <PaymentsDisplay :items="currentElements" />
      <Pagination
        @paginate="changePage"
        :paymentsCount="paymentsList.length"
        :currentPage="page"
        :itemsOnPage="count"
        :countPagesInBase="getPages"
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
// import AddPaymentForm from "../components/AddPaymentForm.vue";
import Pagination from "../components/Pagination.vue";
// import ModalWindow from "../components/ModalWindow.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    // AddPaymentForm,
    Pagination,
    // ModalWindow,
  },
  data() {
    return {
      page: 1,
      count: 10,
      pageNum: 1,

      //   showAddForm = false,
    };
  },
  methods: {
    openChangeItem() {
      this.$emit("openChangeItem");
      console.log(2);
    },
    openModal() {
      this.$modal.show("AddPaymentForm", {
        header: "Add Payment",
        content: "AddPaymentForm",
      });
    },
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
    // ...mapActions({
    //   fetchDataList: "fetchData",
    // }),
  },
  computed: {
    ...mapGetters({
      categoryList: "getCategoryList",
      paymentsList: "getPaymentsList",
      getPages: "getPageCount",
      getFullCoast: "getFullPaymentValue",
    }),
    currentElements() {
      //   console.log(this.paymentsList);
      const { count, page } = this;
      return this.paymentsList.slice(
        count * (page - 1),
        count * (page - 1) + count
      );
    },
  },
  mounted() {
    const page = this.$route.params.page;
    if (page) {
      this.page = Number(page);
    }
    this.$store.dispatch("fetchDataList");
    this.$modal.EventBus.$on("addDPaymentData", this.addNewPayment);
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: rgb(243, 235, 235);
}

.title {
  background-color: rgba(255, 255, 255, 0.815);
}
</style>
