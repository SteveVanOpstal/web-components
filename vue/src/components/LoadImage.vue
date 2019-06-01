<template>
  <div :ready="ready">
    <img :src="srcThumb" :alt="alt" class="thumb">
    <img :src="src" :alt="alt" @load="ready = true">
  </div>
</template>

<style lang="scss" scoped>
div[ready] img.thumb {
  opacity: 0;
}

img {
  width: 400px;
  height: 300px;

  &.thumb {
    position: absolute;
    opacity: 1;
    transition: opacity 0.5s;
  }
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";

Vue.config.productionTip = false;

export default
@Component({
  props: {
    src: String,
    srcThumb: String,
    alt: String
  }
})
class LoadImage extends Vue {
  ready = false;
}
</script>
