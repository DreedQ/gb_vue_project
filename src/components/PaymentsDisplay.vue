<template>
  <div :class="[$style.wrapper]">
    <table :class="[$style.tablet]">
      <tr>
        <td :class="[$style.tab_col1]">#</td>
        <td :class="[$style.tab_col2]">Date</td>
        <td :class="[$style.tab_col3]">Category</td>
        <td :class="[$style.tab_col4]">Value</td>
      </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td :class="[$style.tab_col1]">{{ item.id }}</td>
        <td :class="[$style.tab_col2]">{{ item.date }}</td>
        <td :class="[$style.tab_col3]">{{ item.category }}</td>
        <td :class="[$style.tab_col4]">{{ item.value }}</td>
        <td :class="[$style.tab_col5]" @click="onClickItem(item, $event)">⫶</td>
      </tr>
    </table>
  </div>
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
      //mutation
      this.contextMenu.hide();
    },
    ...mapMutations({
      deleteItemFromDB: "deletteDataFromPaymentList",
      changeItemInDB: "changeDataInPaymentList",
    }),
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: rgb(255, 255, 255);
}
.tablet {
  tr {
    background: rgb(243, 237, 237);
    height: 25px;
    .tab_col1 {
      width: 15px;
      padding: 3px 15px 3px 15px;
      border-bottom: 1px solid rgb(206, 185, 185);
    }
    .tab_col2 {
      width: 65px;
      padding: 3px 15px 3px 15px;
      border-bottom: 1px solid rgb(206, 185, 185);
    }
    .tab_col3 {
      width: 45px;
      padding: 3px 15px 3px 15px;
      border-bottom: 1px solid rgb(206, 185, 185);
    }
    .tab_col4 {
      width: 35px;
      padding: 3px 15px 3px 15px;
      border-bottom: 1px solid rgb(206, 185, 185);
    }
    .tab_col5 {
      width: 10px;
      padding: 3px 15px 3px 15px;
      border-bottom: 1px solid rgb(206, 185, 185);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
