<template>
  <form v-on:submit.prevent>
      <input type="text" v-model="search" placeholder="search for a location..." v-on:keyup.enter="countrySearch">
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
        }

    }

}
</script>

<style>

</style>