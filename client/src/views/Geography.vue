<template>
  <div>
      <label for="country_select">Country:</label>
    <select id="country_select" v-model="selectedCountry" v-on:change = "addToQuizList(selectedCountry)" required>
      <option disabled value="">Select a country</option>
      <option v-for="(country, index) in countries" :value="country" :key="index">{{ country.name }}</option>
    </select>
      <country-detail :selectedCountry="selectedCountry"></country-detail>


      <world-map v-if="countries" :countries="countries"></world-map>
   
      <div v-if="quizList.length === 4 && !quizList.includes(null)">
         <router-link v-on:click="sendToQuiz" :to="{name: 'quiz'}">Quiz</router-link>
      </div>
  </div>
</template>

<script>
import WorldMap from '@/components/WorldMap.vue'
import CountryDetail from '@/components/CountryDetail';
import {eventBus} from '../main.js'

export default {

    components: {
        'country-detail': CountryDetail,
        'world-map': WorldMap
    },

    data() {
    return {
      countries: [],
      selectedCountry: null,
      quizList: []
    }
  },
    
    computed: {
      addToQuizList: function() {
      this.quizList.push(this.selectedCountry)
      if (this.quizList.length > 4) {
        this.quizList.splice(0, 1)
      }
    },  

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

      sendToQuiz: function() {
        eventBus.$emit('quizList', this.quizList)
      }
  }
}




</script>

<style>

</style>