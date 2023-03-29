<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <SpinnerTest :loading="loadingState"></SpinnerTest>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue'
import SpinnerTest from '@/components/SpinnerTest.vue'
import bus from '@/utils/bus'

export default {
  data() {
    return {
      loadingState: false,
    }
  },
  components: {
    ToolBar,
    SpinnerTest,
  },
  methods: {
    startSpinner() {
      this.loadingState = true
    },
    endSpinner() {
      this.loadingState = false
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  // ❗off를 안하게 되면 계속 쌓이게 된다.
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
</style>
