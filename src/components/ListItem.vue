<template>
  <div>
    <ul class="list_item">
      <li class="item" v-for="item in listItems" v-bind:key="item">
        <template v-if="item.domain">
          <a class="tit" v-bind:href="item.url">{{ item.title }}</a>
        </template>
        <template v-else>
          <router-link class="tit" :to="`/item/${item.id}`">{{ item.title }}</router-link>
        </template>
        <p class="txts">
          <template v-if="item.points">
            <span class="txt">💰 {{ item.points }}</span>
          </template>
          <template v-if="item.user">
            <router-link class="txt" v-bind:to="`/user/${item.user}`">😊 {{ item.user }}</router-link>
          </template>
          <template v-else>
            <span class="txt">😊 {{ item.domain || "no" }}</span>
          </template>
          <span class="txt">⏰ {{ item.time_ago }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      if(name === 'news') {
        return this.$store.state.newsItem
      } else if(name === 'ask') {
        return this.$store.state.askItem
      } else {
        return this.$store.state.jobsItem
      }
    }
    // ...mapGetters([
    //   'fetchedNews'
    // ])
  },
  // created() {
  //   const name = this.$route.name;
  //   if(name === 'news') {
  //     this.$store.dispatch("FETCH_NEWS")
  //   } else if(name === 'ask') {
  //     this.$store.dispatch("FETCH_ASK")
  //   } else if(name === 'jobs') {
  //     this.$store.dispatch("FETCH_JOBS")
  //   }
  // }
}
</script>

<style scoped>
  .list_item .item {padding: 10px; list-style: none;}
  .list_item .item + .item {border-top: 1px solid #42b883;}
  .list_item .item .txts .txt {font-size: 12px; color: #666;}
  .list_item .item .txts .txt + .txt {margin-left: 8px;}
</style>