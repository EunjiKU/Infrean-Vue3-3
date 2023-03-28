<template>
  <div>
    <ul class="list_item">
      <li class="item" v-for="item in fetchedAsk" v-bind:key="item">
        <router-link class="tit" :to="`/item/${item.id}`">{{ item.title }}</router-link>
        <p class="txts">
          <span class="txt">💰{{ item.points }}</span>
          <router-link class="txt" v-bind:to="`/user/${item.user}`">😊{{ item.user }}</router-link>
          <span class="txt">⏰{{ item.time_ago }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  created() {
    this.$store.dispatch("FETCH_ASK")
  }
}
</script>

<style scoped>
  .list_item .item {padding: 10px; list-style: none;}
  .list_item .item + .item {border-top: 1px solid #42b883;}
  .list_item .item .txts .txt {font-size: 12px; color: #666;}
  .list_item .item .txts .txt + .txt {margin-left: 8px;}
</style>