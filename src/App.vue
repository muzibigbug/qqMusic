<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// flyio的异步使用
// import fly from 'flyio'
export default {
  name: 'App',
  mounted() {
    // fly.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
