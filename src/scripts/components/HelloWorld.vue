<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg: string;
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <h1>Msg: {{ msg }}</h1>
  </div>
</template>
