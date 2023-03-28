<template>
  <div>
    <UserProfile>
      <p slot="username">😊 id : {{ fetchedUser.id }}</p>
      <p slot="karma">💰 karma : {{ fetchedUser.karma }}</p>
      <p slot="time">⏰ created : {{ fetchedUser.created }}</p>
    </UserProfile>
    <!-- <p>😊 id : {{ fetchedUser.id }}</p>
    <p>💰 karma : {{ fetchedUser.karma }}</p>
    <p>⏰ created : {{ fetchedUser.created }}</p>
    <p class="user_txt" v-html="fetchedUser.about"></p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue'

export default {
    computed: {
    ...mapGetters([
      'fetchedUser'
    ])
  },
  components: {
    UserProfile
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", username)
  }
}
</script>

<style>
</style>