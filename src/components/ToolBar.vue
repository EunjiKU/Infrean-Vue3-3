<template>
  <header>
    <p>2️⃣ </p>
    <router-link to="/news">news</router-link>
    <router-link to="/ask">ask</router-link> 
    <router-link to="/jobs">jobs</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header {padding: 10px; background: #42b883;}
  header a {text-decoration: none; color: #fff;}
  header a + a {margin-left: 10px;}
  header .router-link-exact-active { text-decoration: underline;}
</style>