<template>
  <div id="app">

     
    <div id="wrapper">
        <world-map id="box-one" :countries="countries"></world-map>
    </div>

    <div id="box-two">

    </div>

    <div id="box-three">    
      <label for="country_select">Country:</label>
      <select id="country_select" v-model="selectedCountry" v-on:change = "addToQuizList(selectedCountry)" >
      <option disabled value="">Select a country</option>
      <option v-for="(country, index) in countries" :value="country" :key="index">{{ country.name }}</option>
      </select>
      <country-detail :selectedCountry="selectedCountry"></country-detail>
      <div id="box-three"> 
        <quiz :quizList="quizList"></quiz> 
      </div>
    </div>
    
    <div id="box-four">
      <img class="animate__animated animate__bounce" src="./assets/cute-brain-cartoon.png" alt="brain">
    </div>

    <nav>
      <router-link :to="{name: 'map'}">Map</router-link>
      <!-- <router-link :to="{name: 'about'}">About</router-link>
      <router-link :to="{name: 'contact'}">Contact</router-link> -->
    </nav>
    <router-view id="view"></router-view>
  </div>

</template>




<script>
// import WorldMap from './components/WorldMap.vue'
// import { eventBus } from '@/main.js';
// import CountryDetail from './components/CountryDetail.vue';
// import Quiz from './components/Quiz.vue'



export default {
  name: 'App',

  // data() {
  //   return {
  //     countries: [],
  //     selectedCountry: null,
  //     quizList: []
  //   }
  // },

// components: {
//     'country-detail': CountryDetail,
//     'quiz': Quiz,
//     'world-map': WorldMap
//   },

//   computed: {
//     addToQuizList: function() {
//     this.quizList.push(this.selectedCountry)
//     if (this.quizList.length > 4) {
//       this.quizList.splice(0, 1)
//     }
//   },  

//   },

  // mounted() {
  //   this.fetchCountries()
    
  // },

  methods: {
    fetchCountries: function() {
      const request = fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => this.countries = data)
      console.log(request)
    },
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
  flex-direction: column wrap;
  width: 70%;
}
#box-one{
  background-color: rgb(210, 241, 209);
  width: 100%;
  order: 1;
}
#box-two{
  background-color: rgb(233, 216, 232);
  width: 100%;
  order: 3;
}
#box-three {
  background-color: cadetblue;
  order: 2;
  width: 30%;
  align-items: stretch;
}

#box-four {
  background-color: palegoldenrod;
  order: 3;
  width: 30%;
}

#box-four > img {
  width: 90%;
}

</style>
