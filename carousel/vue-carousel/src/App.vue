<template>
  <div id="app">
    <div class="actions">
      <button @click="prev()">Prev</button>
      <button @click="next()">Next</button>
    </div>

    <div class="grid">
      <angular-load-image
        :src="srcLink(index)"
        :src-thumb="srcThumbLink(index)"
        alt="angular"
      >Loading Angular..</angular-load-image>
      <vue-load-image
        :src="srcLink(index + 1)"
        :src-thumb="srcThumbLink(index + 1)"
        alt="vue"
      >Loading Vue..</vue-load-image>
      <react-load-image
        :src="srcLink(index + 2)"
        :src-thumb="srcThumbLink(index + 2)"
        alt="react"
      >Loading React..</react-load-image>
      <javascript-load-image
        :src="srcLink(index + 3)"
        :src-thumb="srcThumbLink(index + 3)"
        alt="javascript"
      >Loading JavaScript..</javascript-load-image>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

export default
@Component({})
class App extends Vue {
  index = 0;

  prev() {
    this.index += 1;
    this.index %= 4;
  }

  next() {
    this.index -= 1;
    if (this.index < 0) {
      this.index = 3;
    }
  }

  srcLink(index) {
    return `http://localhost:3200/assets/${index % 4}.jpg`;
  }

  srcThumbLink(index) {
    return `http://localhost:3200/thumbs/${index % 4}.jpg`;
  }
}
</script>

<style>
#app {
  position: relative;
  display: block;
  border: 5px solid #35495e;
}

#app::before {
  content: "";
  position: absolute;
  background-image: url("http://localhost:3200/assets/icons/vue.svg");
  background-repeat: no-repeat;
  top: 10px;
  left: 10px;
  height: 100px;
  width: 100px;
  z-index: 1;
}
</style>
