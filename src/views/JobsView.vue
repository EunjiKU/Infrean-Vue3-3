<template>
  <div>
    <ListItem></ListItem>
    <!-- <div>
      <ul class="list_item">
        <li class="item" v-for="item in fetchedJobs" v-bind:key="item">
          <a class="tit" v-bind:href="item.url">{{ item.title }}</a>
          <p class="txt">
            <span class="txt">💰{{ item.points || 0 }}</span>
            <span class="txt">😊{{ item.domain || "no" }}</span>
            <span class="txt">⏰{{ item.time_ago }}</span>
          </p>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'

export default {
  components: {
    ListItem,
  }
}
</script>

<style scoped>
</style>