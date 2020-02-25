<template>
  <div id="app">
    <router-link to="/">
      Index
    </router-link>
    <router-link to="/worldmap">
      世界地图
    </router-link>
    <router-link to="/chinamap">
      中国地图
    </router-link>
    <router-link to="/audio">
      音乐
    </router-link>
    <router-link to="/anchor">
      锚点
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  /* display: none */
}

::-webkit-scrollbar-thumb {
  background-color: #9E9E9E;
  border-radius: 6px;
}

::-webkit-scrollbar-track {
  background-color: #FFFFFF;
  border-radius: 6px;
}
</style>
