<template>
  <div v-if="selectedCountry" id="selected-country">

    <h3> {{ selectedCountry.name }} </h3>
    <img class="lrg-flag" :src="selectedCountry.flag" alt="">
    <!-- <h3> Capital City: {{ selectedCountry.capital }} </h3>
    <h3> Region: {{ selectedCountry.subregion }}, {{ selectedCountry.region }} </h3>
    <h3> Area: {{ selectedCountry.area.toLocaleString() }}km²</h3>
    <h3> Population: {{ selectedCountry.population.toLocaleString() }}</h3>
    <h3> Demonym: {{ selectedCountry.demonym }}</h3> -->


  <p>{{ selectedCountry.name }} is located in {{ selectedCountry.subregion }}, {{ selectedCountry.region }}. 
    The size of {{ selectedCountry.name }} is {{ selectedCountry.area.toLocaleString() }}km².
    The Capital City of {{ selectedCountry.name }} is {{ selectedCountry.capital }}. 
    {{ selectedCountry.population.toLocaleString() }} live in {{ selectedCountry.name }} and they are known as {{ selectedCountry.demonym }}.   </p>
  
  </div>

</template>

<script>

export default {
  
  name: 'country-detail',
  props: ['selectedCountry'],




}
</script>

<style lang="css">

.lrg-flag {
  height: 100px
}

</style>