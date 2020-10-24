<template>
  <div id="app">

    <div id="wrapper">
      <div id="box-one"> map</div>
    <div id="box-two">    
    
      <label for="country_select">Country:</label>
    <select id="country_select" v-model="selectedCountry" v-on:change = "addToQuizList(selectedCountry)" >
      <option disabled value="">Select a country</option>
      <option v-for="(country, index) in countries" :value="country" :key="index">{{ country.name }}</option>
    </select>

      <country-detail :selectedCountry="selectedCountry"></country-detail></div>
    </div>
    <div id="box-three"> <quiz :quizList="quizList"></quiz> </div>

  </div>

</template>

<script>

import { eventBus } from '@/main.js';
import CountryDetail from './components/CountryDetail.vue';
import Quiz from './components/Quiz.vue'


export default {
  name: 'App',

  data() {
    return {
      countries: [],
      selectedCountry: null,
      quizList: []
    }
  },

components: {
    'country-detail': CountryDetail,
    'quiz': Quiz
  },

  mounted() {
    this.fetchCountries()
    
  },

  methods: {
    fetchCountries: function() {
      const request = fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => this.countries = data)
      console.log(request)
    },
    addToQuizList: function(selectedCountry) {
      this.quizList.push(selectedCountry)
      if (this.quizList.length > 4) {
      this.quizList.splice(0, 1)
    }
    }
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

</style>
