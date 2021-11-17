<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-5 text-sm-h3 ma-1">
          My personal costs
        </div>

        <v-btn
          class="ma-1"
          @click="dialog = !dialog"
          color="teal"
          :ripple="false"
          dark
          >ADD NEW COST<v-icon>mdi-plus</v-icon></v-btn
        >
        <v-dialog v-model="dialog" max-width="500px">
          <v-card plain>
            <v-card-text class="text-h5 text-center pt-3">
              Add New Payment
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <add-payment-form :categoryItems="categoryItems" />
            </v-card-actions>
          </v-card>
        </v-dialog>
        <PaymentsDisplay :items="paymentsList" />
      </v-col>
      <v-col cols="4"
        ><v-container><chart :spendings="spendings"/></v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Chart from "../components/Chart.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Chart,
  },
  data() {
    return {
      page: 1,
      count: 10,
      pageNum: 1,
      dialog: false,
      categoryItems: [],
      spendings: {},
    };
  },
  methods: {
    openChangeItem() {
      this.$emit("openChangeItem");
    },
    openModal() {
      this.$modal.show("AddPaymentForm", {
        header: "Add Payment",
        content: "AddPaymentForm",
      });
    },
    addNewPayment(data) {
      this.addPayment(data);
    },
    checkExist(data, getter, setter) {
      const list = getter;
      if (list.includes(data.category, 0)) {
        return;
      } else setter(data.category);
    },
    ...mapMutations({
      addPayment: "addDataToPaymentsList",
      addCategory: "addCaregoryToCategoryList",
    }),
  },
  computed: {
    ...mapGetters({
      getCategoryList: "getCategoryList",
      paymentsList: "getPaymentsList",
      getFullCoast: "getFullPaymentValue",
      getSpendings: "getSpendings",
    }),
  },

  mounted() {
    this.categoryItems = this.getCategoryList;
    this.$store.dispatch("loadCategories");
    this.$modal.EventBus.$on("addDPaymentData", this.addNewPayment);
  },
  created() {
    this.spendings = this.getSpendings;
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
