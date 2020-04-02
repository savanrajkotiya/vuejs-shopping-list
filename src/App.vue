<template>
  <div id="app">
    <ShoppingList />
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";

export default {
  name: "app",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ShoppingList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
