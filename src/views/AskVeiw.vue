<template>
  <div>
    <ListItem></ListItem>
    <!-- <div>
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