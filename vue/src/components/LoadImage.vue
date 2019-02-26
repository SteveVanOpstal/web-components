<template>
  <div>
    <img class="thumb" v-bind:class="{ready: ready}" src="{{srcThumb}}">
    <img src="{{src}}" @load="load">
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 400px;
  height: 300px;

  &.thumb {
    position: absolute;
    opacity: 1;
    transition: opacity 0.5s;

    &.ready {
      opacity: 0;
    }
  }
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    src: String,
    srcThumb: String
  }
})
export default class LoadImageComponent extends Vue {
  ready = false;

  load() {
    this.ready = true;
  }
}
</script>
