<template>
  <div>

      <label for="country_select"></label>
      <select id="country_select" v-model="selectedCountry" v-on:change = "addToQuizList(selectedCountry)" required>
        <option disabled value="">Select a country</option>
        <option v-for="(country, index) in countries" :value="country" :key="index">{{ country.name }}</option>
      </select>
      <country-detail :selectedCountry="selectedCountry"></country-detail>

      <div v-if="quizList.length === 4 && !quizList.includes(null)">
         <router-link v-on:click.native="sendToQuiz" :to="{name: 'quiz'}" :quizList="this.quizList">Quiz</router-link>
      </div>


      <world-map v-if="countries" :countries="countries" :selectedCountry="selectedCountry"></world-map>


   

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
      this.quizList.push(this.selectedCountry)
      if (this.quizList.length > 4) {
        this.quizList.splice(0, 1)
      }
    },
  } 
}


</script>

<style>

</style>