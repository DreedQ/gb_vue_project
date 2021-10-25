<template>
  <div :class="[$style.wrapper]">
    <tab :class="[$style.tablet]"
      ><tr>
        <td :class="[$style.tab_col1]">#</td>
        <td :class="[$style.tab_col2]">Date</td>
        <td :class="[$style.tab_col3]">Category</td>
        <td :class="[$style.tab_col4]">Value</td>
      </tr>
      <tr v-for="(item, index) in items" v-bind:key="index">
        <td :class="[$style.tab_col1]">{{ index }}</td>
        <td :class="[$style.tab_col2]">{{ item.date }}</td>
        <td :class="[$style.tab_col3]">{{ item.category }}</td>
        <td :class="[$style.tab_col4]">{{ item.value }}</td>
      </tr>
    </tab>

    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
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
  }
}
</style>
