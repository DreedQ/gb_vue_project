<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      class=""
      hide-default-footer
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
    ></v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="5"
        color="teal"
        text
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "#",
          align: "center",
          value: "id",
        },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
        { text: "Value", value: "value" },
      ],
    };
  },
  methods: {
    onClickItem(item, event) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.$contextMenu.changeMenu(item);
          },
        },
        {
          text: "Delette",
          action: () => {
            this.deleteItemFromDB(item.id);
            this.$contextMenu.hide();
          },
        },
      ];
      this.$contextMenu.show({ items, event });
    },
    actionDelete(id) {
      console.log("delete");
      this.contextMenu.hide();
    },
    ...mapMutations({
      deleteItemFromDB: "deletteDataFromPaymentList",
      changeItemInDB: "changeDataInPaymentList",
    }),
  },
};
</script>

<style lang="scss"></style>
