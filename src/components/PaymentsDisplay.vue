<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
    >
      <template #item.id="{item}"> {{ item.id }} </template>
      <template #item.date="{item}"> {{ item.date }}</template>
      <template #item.category="{item}">{{ item.category }}</template>
      <template #item.amount="{item}">{{ item.amount }}</template>
      <template #item.actions="{on, item}">
        <v-menu top offset-x>
          <template v-slot:activator="{ on, item }">
            <v-btn :ripple="false" plain v-bind="item" v-on="on">
              <v-icon>...</v-icon>
            </v-btn>
          </template>
          <v-btn
            class="mr-1 my-1"
            dark
            small
            v-bind="item"
            color="teal"
            plain
            @click="changeMenu(item)"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            class="ml-1 my-1"
            dark
            small
            color="red"
            plain
            @click="actionDelete(item)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-menu>
      </template>
    </v-data-table>

    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="5"
        color="teal"
        text
      ></v-pagination>
    </div>
    <v-dialog v-model="changeActionShow" max-width="500px">
      <v-card plain>
        <v-card-actions>
          <context-menu :itemToChange="itemToChange" />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "PaymentsDisplay",
  components: { ContextMenu },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      contextMenu: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      changeActionShow: false,
      itemToChange: "",

      headers: [
        {
          text: "#",
          align: "center",
          value: "id",
        },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
        { text: "Value", value: "value" },
        { text: "", value: "actions" },
      ],
    };
  },
  methods: {
    closeChangeMenu() {
      this.changeActionShow = false;
    },
    changeMenu(item) {
      this.changeActionShow = true;
      this.itemToChange = item;
      console.log(item);
    },
    actionDelete(item) {
      this.deleteItemFromDB(item.id);
    },
    ...mapMutations({
      deleteItemFromDB: "deletteDataFromPaymentList",
      changeItemInDB: "changeDataInPaymentList",
    }),
  },
  mounted() {
    this.$contextMenu.EventBus.$on("hide", this.closeChangeMenu);
  },
};
</script>

<style lang="scss"></style>
