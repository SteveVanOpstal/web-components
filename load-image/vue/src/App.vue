<template>
  <LoadImage
    src="http://localhost:3200/vue.jpg"
    thumb="http://localhost:3200/vue-thumb.jpg"
    alt="vue"
  />
</template>

<script>
import LoadImage from "./components/LoadImage.vue";

export default {
  name: "app",
  components: {
    LoadImage
  }
};
</script>
