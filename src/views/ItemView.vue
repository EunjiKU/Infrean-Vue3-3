<template>
  <div>
    <div class="user_box">
      <router-link class="txt" v-bind:to="`/user/${fetchedItem.user}`">😊 id : {{ fetchedItem.user }}</router-link>
    </div>
    <div class="item_box">
      <h2 class="tit">{{ fetchedItem.title }}</h2>
      <p class="time">{{ fetchedItem.time_ago }}</p>
      <p class="txt" v-html="fetchedItem.content"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
    ...mapGetters([
      'fetchedItem'
    ])
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