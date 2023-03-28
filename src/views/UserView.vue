<template>
  <div>
    <p>😊 id : {{ fetchedUser.id }}</p>
    <p>💰 karma : {{ fetchedUser.karma }}</p>
    <p>⏰ created : {{ fetchedUser.created }}</p>
    <p class="user_txt" v-html="fetchedUser.about"></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
    ...mapGetters([
      'fetchedUser'
    ])
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", username)
  }
}
</script>

<style>
.user_txt {margin: 10px 20px; padding: 10px; font-size: 12px; border: 1px solid #42b883;}
</style>