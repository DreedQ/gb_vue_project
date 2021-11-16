<template>
  <v-container>
    <v-card class="align-center" flat>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
      </v-menu>
      <v-spacer></v-spacer>
      <v-select
        :items="categoryItems"
        v-model="category"
        label="Category"
        color="teal"
      ></v-select>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="amount"
        type="number"
        label="Amount"
        color="teal"
      ></v-text-field>
      <v-btn class="" @click="onSaveClick">Save!</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddPaymentForm",
  data() {
    return {
      amount: "",
      date: "",
      category: "",
      items: [],
      menu: false,
    };
  },
  props: {
    categoryItems: Array,
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${y}.${m}.${d}`;
    },
    ...mapGetters(["getCategoryList"]),
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
        // console.log(this.categoryItems);
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
  mounted() {
    // console.log(this.categoryItems);
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: #fff;
}
</style>
