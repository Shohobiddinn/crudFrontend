<script>
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
  <Loading />
  <RouterView />
</template>

<style></style>
