<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from '../components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
.Main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <main id="main" class="Main" role="main">
    Hello, vue.js
    <hello-world msg="Hello world component here." />
  </main>
</template>
