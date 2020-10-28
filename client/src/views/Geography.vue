<template>
<div id="geography-wrapper">
  <div id="country-select">
      <label for="country_select">Select a country </label>

      <select id="country_select" v-model="selectedCountry" v-on:change = "addToQuizList(selectedCountry)" required>
        <option disabled value="">Select a country</option>
        <option v-for="(country, index) in countries" :value="country" :key="index">{{ country.name }}</option>
      </select>
      <country-detail v-if="selectedCountry" :selectedCountry="selectedCountry" v-on:change = "addToQuizList(selectedCountry)"></country-detail>

      <div v-if="quizList.length === 4 && !quizList.includes(null)">
         <router-link v-on:click.native="sendToQuiz" :to="{name: 'quiz'}" :quizList="this.quizList" id="button">Quiz</router-link>
      </div>
      </div>
      
      <world-map v-if="countries" :countries="countries" :selectedCountry="selectedCountry" id="map"></world-map>


   

  </div>
</template>

<script>
import WorldMap from '@/components/WorldMap.vue'
import CountryDetail from '@/components/CountryDetail';
import {eventBus} from '../main.js'

export default {

    components: {
        'country-detail': CountryDetail,
        'world-map': WorldMap,
    },

    data() {
    return {
      countries: [],
      selectedCountry: null,
      quizList: []
    }
  },
    


    mounted() {
      this.fetchCountries()

      eventBus.$on('country-selected', (selectedCountry) => {
           this.selectedCountry = selectedCountry;
      })


  },

    methods: {
      fetchCountries: function() {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
        console.log(request)
      },

      sendToQuiz: function(event) {
        event.preventDefault()
        console.log("send to quiz called")
        eventBus.$emit('quizList', this.quizList)
      },
      addToQuizList: function() {
      if (this.quizList.includes(this.selectedCountry) === false) {
        this.quizList.push(this.selectedCountry) }
      if (this.quizList.length > 4) {
        this.quizList.splice(0, 1)
      }
    },
  } 
}


</script>

<style>
#geography-wrapper {
  display: flex;
  flex-direction: row wrap;
}
#country-select {
  width: 30%;
  order: 2

}
#map{
  width: 70%;
  margin-left: 30px
}

#button {
  border: 1pt solid #FB8500;
  background-color: #FFB703;
  font-weight: bolder;
  padding: 10px;
}

#country-select {
  font-weight: bold;
  color: #FB8500;
}
</style>