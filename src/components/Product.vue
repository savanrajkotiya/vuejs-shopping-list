<template>
  <li :class="className" v-on:click="onSelect(productObj)">
    <a>{{ name }}</a>
  </li>
</template>

<script>
export default {
  name: "product",
  props: {
    name: {
      type: String,
      required: true,
      default: "Product Name"
    },
    className: {
      type: String,
      required: true
    },
    productObj: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSelect(productObj) {
      this.$emit("onClick", productObj);
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    // console.log(this.$props);
  }
};
</script>

<style></style>
