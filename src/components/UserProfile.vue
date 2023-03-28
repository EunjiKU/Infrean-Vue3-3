<template>
  <div>
    <div class="user_box">
      <slot name="username">
        <!-- <p>😊 id : {{ info.id }}</p> -->
      </slot>
      <slot name="karma">
        <!-- <p>💰 karma : {{ info.karma }}</p> -->
      </slot>
      <slot name="time">
        <!-- <p>⏰ created : {{ info.created }}</p> -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  computed: {
    userInfo() {
      return this.$store.state.userItem;
    }
  }
}
</script>

<style>
</style>