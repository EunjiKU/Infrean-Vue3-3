<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <SpinnerTest :loading="true"></SpinnerTest>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue'
import SpinnerTest from '@/components/SpinnerTest.vue'

export default {
  components: {
    ToolBar,
    SpinnerTest,
  }
}
</script>

<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
</style>
