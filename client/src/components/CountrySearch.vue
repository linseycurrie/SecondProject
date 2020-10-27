<template>
  <form v-on:submit.prevent>
      <input type="text" v-model="search" placeholder="search for a location..." v-on:keyup.enter="countrySearch">
      <select v-on:change="countrySelect" v-model="selectedCountry" >
        <option disabled value="">Select a country</option>
        <option v-for="(country, index) in countries" :value="country" :key="index">{{ country.name }}</option>
      </select>
  </form>





  
</template>

<script>

import {eventBus} from '../main.js'

export default {
    
    name: 'country-search',
    props: ['countries'],
    
    data(){
        return {
            search: '',
            selectedCountry: {},
        }
    },

    methods: {
        countrySearch() {
            let foundCountry = this.countries.filter((country) => {
                return country.name.toLowerCase().indexOf(this.search.toLowerCase()) > - 1
            })
                    
            this.selectedCountry = foundCountry

            eventBus.$emit('country-selected', this.selectedCountry)
        },

        countrySelect() {
        this.search = ''
        eventBus.$emit('country-selected', this.selectedCountry)

        }
    }
}
</script>


// countrySearch(){
//       if(this.searchValue){
//       return this.countries.filter((country)=>{
//         return this.searchValue.toLowerCase().split(' ').every(a => country.name.toLowerCase().startsWith(a))
//       })
//     }
//   }






<style>

</style>