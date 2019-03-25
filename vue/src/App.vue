<template>
  <LoadImage src="http://localhost:3000/vue.jpg" thumb="http://localhost:3000/vue-thumb.jpg"/>
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
