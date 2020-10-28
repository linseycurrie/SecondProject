<template>
  <div id="app">
    <header>
      <div id="container">
        <img class="logo" src="https://i.ibb.co/8Y5NvFH/Screenshot-2020-10-27-at-13-58-07.png" height=300 width=200/>
      <nav id="nav-wrapper">
      <router-link :to="{name: 'home'}" id="rlink">Home</router-link>
      <router-link :to="{name: 'geography'}" id="rlink">Geography</router-link>
      <a href="/" id="rlink">Maths</a>
      <a href="/" id="rlink">English</a>
      <a href="/" id="rlink">Science</a>
      <a href="/" id="rlink">History</a>
      <a href="/" id="rlink">Languages</a>
    </nav>
      </div>

    </header>
    <body>
    <!-- <div id="box-four">
      <img class="animate__animated animate__bounce" src="./assets/owlGrad.png">
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

#view{
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
  margin-left: 10px;
  margin-right: 10px;
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
  border-bottom: 3pt #023047 solid;
}

#rlink {
  text-decoration: none;
  font-weight: bold;
  color: #FB8500;

}

body {
  text-align: center;
}

</style>
