<script>
import sidebar from "/src/components/sidebar.vue";
import Loading from "./components/Animation/Loading.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Loading,
  },
};
</script>

<template>
  <div class="bg-img"></div>
  <loading />
  <!-- <sidebar /> -->
  <RouterView />
</template>

<style></style>
