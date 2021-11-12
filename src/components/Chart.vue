<script>
import { Doughnut } from "vue-chartjs";
import { mapGetters } from "vuex";
export default {
  extends: Doughnut,
  data() {
    return {
      categoryes: [],
    };
  },
  computed: {
    ...mapGetters({
      getItems: "getPaymentsList",
      getCategories: "getCategoryList",
    }),
  },
  mounted() {
    this.categoryes = this.getCategories;
    console.log(this.categoryes);
    this.renderChart({
      labels: this.categoryes,
      datasets: [
        {
          label: "Categories",
          backgroundColor: "green",
          data: [40, 20, 12, 39],
        },
      ],
    });
  },
};
</script>

<style></style>
