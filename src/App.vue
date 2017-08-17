<template>
  <transition name="fade" mode="out-in">
    <keep-alive exclude="">
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './style/common';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
