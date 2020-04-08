<template>
  <div>
    <p>Product Details :</p>
    <p>ID : {{$route.params.id}}</p>
    <br />
    <button class="btn btn-primary" @click="$router.push('/products')">Go back!</button>
  </div>
</template>


<script>
export default {
  name: "ProductDetail",
  data() {
    return {};
  },
  mounted() {
    // eslint-disable-next-line no-console
    // console.log(this.$route.params.id);
  }
};
</script>