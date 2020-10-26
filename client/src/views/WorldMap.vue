<template>
  <div>
      <label for="country_select">Country:</label>
    <select id="country_select" v-model="selectedCountry" v-on:change = "addToQuizList(selectedCountry)" >
      <option disabled value="">Select a country</option>
      <option v-for="(country, index) in countries" :value="country" :key="index">{{ country.name }}</option>
    </select>
      <country-detail :selectedCountry="selectedCountry"></country-detail>
      <h1>Hello!</h1>
  </div>
</template>

<script>
import CountryDetail from '@/components/CountryDetail';

export default {

    components: {
        'country-detail': CountryDetail
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
      fetchCountries()
    
  },

//   methods: {
//     fetchCountries: function() {
//       const request = fetch("https://restcountries.eu/rest/v2/all")
//       .then(response => response.json())
//       .then(data => this.countries = data)
//       console.log(request)
//     },
//   }
}




</script>

<style>

</style>