<template>
  <div id="app">
    <label for="country_select">Country:</label>
    <select id="country_select" v-model="selectedCountry">
      <option disabled value="">Select a country</option>
      <option v-for="(country, index) in countries" :value="country" :key="index">{{ country.name }}</option>
    </select>

      <country-detail :selectedCountry="selectedCountry"></country-detail>
  </div>

</template>

<script>

import { eventBus } from '@/main.js';
import CountryDetail from './components/CountryDetail.vue';



export default {
  name: 'App',

  data() {
    return {
      countries: [],
      selectedCountry: null
    }
  },

components: {
    'country-detail': CountryDetail
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
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
