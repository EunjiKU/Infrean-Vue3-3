<template>
  <div>
    <ul class="list_item">
      <li class="item" v-for="item in fetchedJobs" v-bind:key="item">
        <a class="tit" v-bind:href="item.url">{{ item.title }}</a>
        <p class="txts">
          <span class="txt">💰{{ item.points || 0 }}</span>
          <span class="txt">😊{{ item.domain || "no" }}</span>
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
      'fetchedJobs'
    ])
  },
  created() {
    this.$store.dispatch("FETCH_JOBS")
  }
}
</script>

<style scoped>
  .list_item .item {padding: 10px; list-style: none;}
  .list_item .item + .item {border-top: 1px solid #42b883;}
  .list_item .item .txts .txt {font-size: 12px; color: #666;}
  .list_item .item .txts .txt + .txt {margin-left: 8px;}
</style>