<template>
  <img class="thumb" v-bind:class="{ready: ready}" src="{{srcThumb}}"/>
  <img [src]="{{src}}" @load="load"/>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    src: String,
    srcThumb: String
  },
  template: ``
})
export default class LoadImageComponent extends Vue {
  ready = false;

  load(): void {
    this.ready = true;
  }
}
</script>
