<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: { spendings: Object },
  mounted() {
    console.log(this.spendings);
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
          ],
          borderColor: [
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
