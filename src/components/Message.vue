<template>
  <div class="col-sm-6 alert msg" :class="alert" role="alert">
    <p class="text-center fs-5">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "AlertMessage",
  props: {
    message: String,
    alert: String
  },
};
</script>

<style scoped>
.msg{
    height: 50px;
    padding: 10px;
}
</style>