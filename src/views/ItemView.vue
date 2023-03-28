<template>
  <div>
    <!-- <div class="user_box">
      <router-link class="txt" v-bind:to="`/user/${fetchedItem.user}`">😊 id : {{ fetchedItem.user }}</router-link>
      <p>⏰ time : {{ fetchedItem.time_ago }}</p>
    </div> -->
    <UserProfile :info="fetchedItem">
      <router-link slot="username" class="txt" v-bind:to="`/user/${fetchedItem.user}`">😊 id : {{ fetchedItem.user }}</router-link>
      <p slot="time">⏰ created : {{ fetchedItem.time_ago }}</p>
    </UserProfile>
    <div class="item_box">
      <h2 class="tit">{{ fetchedItem.title }}</h2>
      <p class="time">{{ fetchedItem.time_ago }}</p>
      <p v-html="fetchedItem.content"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue'

export default {
    computed: {
    ...mapGetters([
      'fetchedItem'
    ])
  },
  components: {
    UserProfile
  },
  created() {
    const itemUrl = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemUrl)
  }
}
</script>

<style>
  .user_box {margin-bottom: 10px;}
  .user_box a {color: #000; text-decoration: none;}
  .item_box {border-top: 1px solid #42b883;}
  .item_box .time {text-align: right; font-size: 12px; color: #666;}
</style>