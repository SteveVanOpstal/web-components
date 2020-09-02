<template>
  <div class="root" :ready="ready">
    <img :src="srcThumb" :alt="alt" class="thumb" />
    <img :src="src" :alt="alt" @load="ready = true" loading="lazy" />
  </div>
</template>

<style lang="scss" scoped>
.root {
  display: block;
  width: 400px;
  height: 300px;
}

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
  },
  watch: {
    src: function() {
      this.ready = false;
    }
  }
})
class LoadImage extends Vue {
  ready = false;
}
</script>
