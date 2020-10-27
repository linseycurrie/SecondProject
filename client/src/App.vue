<template>
  <div id="app">
    <header>
      <div id="container">
        <img class="logo" src="https://i.ibb.co/8Y5NvFH/Screenshot-2020-10-27-at-13-58-07.png" height=260 width=200 />
      <nav id="nav-wrapper">
      <router-link :to="{name: 'home'}" id="rlink">Home</router-link> <br>
      <router-link :to="{name: 'geography'}" id="rlink">Geography</router-link>
    </nav>
      </div>

    </header>
    <body>
    <!-- <div id="box-four">
      <img class="animate__animated animate__bounce" src="./assets/cute-brain-cartoon.png" alt="brain">
    </div> -->

    
    <router-view id="view"></router-view>
    </body>
  </div>

</template>




<script>
export default {
  name: 'App'


}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 0px;
};
#container {
  display: flex;
  flex-direction: row wrap;
  justify-content: space-around;
}
.logo {
  background-color: aliceblue;
}
#nav-wrapper {
  display: flex;
  flex-direction: row wrap;
  justify-content: space-between;
}

#rlink {
  text-decoration: none;
}

body {
  text-align: center;
}

</style>
