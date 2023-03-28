<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue'

export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
</style>
