<template>
  <div>


      <country-search :countries="countries" />
      <country-detail :selectedCountry="selectedCountry"></country-detail>


      <!-- <world-map v-if="countries" :countries="countries"></world-map> -->
   
      <div v-if="quizList.length === 4 && !quizList.includes(null)">
         <router-link v-on:click.native="sendToQuiz" :to="{name: 'quiz'}" :quizList="this.quizList">Quiz</router-link>
      </div>
  </div>
</template>

<script>
import WorldMap from '@/components/WorldMap.vue'
import CountryDetail from '@/components/CountryDetail';
import CountrySearch from '@/components/CountrySearch';
import {eventBus} from '../main.js'

export default {

    components: {
        'country-detail': CountryDetail,
        'world-map': WorldMap,
        'country-search': CountrySearch
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
      this.selectedCountry = selectedCountry
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