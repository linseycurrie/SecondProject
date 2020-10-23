<template>
  <div id="app">
    <div id="wrapper">
      <div id="box-one"> map</div>
    <div id="box-three"> profile</div>
    </div>
    <div id="box-two"> quiz links / images </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row wrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#wrapper {
  display: flex;
  flex-direction: column;
  width: 70%;
}
#box-one{
  background-color: rgb(210, 241, 209);
  width: 100%;
  order: 1;
}
#box-two {
  background-color: cadetblue;
  order: 2;
  width: 30%;
  align-items: stretch;
}
#box-three{
  background-color: rgb(233, 216, 232);
  width: 100%;
  order: 3;
}
</style>
