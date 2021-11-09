<template>
  <div :class="[$style.wrapper]" v-if="modalName">
    <div :class="[$style.header]">
      {{ modalWindowSettings.settings.header }}
    </div>
    <div :class="[$style.content]">
      <!-- <AddPaymentForm v-if="modalName === 'addpaymentform'" />
      <AuthForm v-if="modalName === 'authform'" /> -->
      <component :is="modalName" />
    </div>
    <div :class="[$style.footer]">
      <button @click="$modal.hide()">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm";

// import AuthForm from "./AuthForm";
export default {
  name: "ModalWindow",
  components: {
    AddPaymentForm,
    // AuthForm,
  },
  props: {
    modalName: String,
    modalWindowSettings: Object,
  },
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: rgba(241, 152, 152, 0.774);
  position: absolute;
  font-size: 18px;
  top: 80px;
  left: 70px;
  & .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(68, 61, 61, 0.5);
  }
  & .content {
    position: relative;
    z-index: 100;
  }
}
.footer,
.header,
.title {
  background-color: rgb(187, 187, 187);
}
</style>
