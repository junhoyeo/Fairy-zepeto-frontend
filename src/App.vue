<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style src="@/assets/css/style.css">
</style>

<style scoped>
html, body, #app {
  width: 100%;
  height: 100%;
}
</style>
