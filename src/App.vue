<template>
  <div id="app" :test="pagePath" :class="{fullBox:pagePath==='/login'}">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    pagePath() {
      return this.$route.path;
    }
  }
};
</script>
<style>

</style>
