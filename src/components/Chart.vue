<script>
import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  name: "Chart",
  extends: Doughnut,
  mixins: [reactiveProp],
  props: {
    spendings: {
      categoryes: { type: Array, default: () => [] },
      values: { type: Array, default: () => [] },
    },
    chartData: Object,
  },
  mounted() {
    // console.log("chart", this.spendings);
    this.renderChart({
      labels: this.spendings.categoryes,
      datasets: [
        {
          label: "category",
          backgroundColor: [
            "rgba(255, 99, 102, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 129, 102, 1)",
            "rgba(134, 162, 235, 1)",
            "rgba(205, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(103, 102, 255, 1)",
            "rgba(235, 109, 164, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, .5)",
            "rgba(54, 162, 235, .5)",
            "rgba(255, 206, 86, .5)",
            "rgba(75, 192, 192, .5)",
            "rgba(153, 102, 255, .5)",
            "rgba(255, 159, 64, .5)",
            "rgba(255, 99, 132, .5)",
            "rgba(54, 162, 235, .5)",
            "rgba(255, 206, 86, .5)",
            "rgba(75, 192, 192, .5)",
            "rgba(153, 102, 255, .5)",
            "rgba(255, 159, 64, .5)",
          ],
          data: this.spendings.values,
        },
      ],
    });
  },
};
</script>

<style></style>
