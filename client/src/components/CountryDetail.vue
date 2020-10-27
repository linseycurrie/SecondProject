<template>
  <div v-if="selectedCountry" id="selected-country">

    <h3> {{ selectedCountry.name }} </h3>
    <img class="lrg-flag" :src="selectedCountry.flag" alt="">
    <p v-if="selectedCountry.region !==''">{{ selectedCountry.name }} is located in {{ selectedCountry.region }}.</p>
    <p>The size of {{ selectedCountry.name }} is {{ selectedCountry.area.toLocaleString() }}km².</p>
    <p v-if="selectedCountry.capital !==''">The Capital City of {{ selectedCountry.name }} is {{ selectedCountry.capital }}.</p>
    <p>{{ selectedCountry.population.toLocaleString() }} people live in {{ selectedCountry.name }}.</p>
    <p v-if="selectedCountry.demonym !==''">People from {{ selectedCountry.name }} are known as {{ selectedCountry.demonym }}.</p>
  
  </div>

</template>

<script>

export default {
  
  name: 'country-detail',
  props: ['selectedCountry']

}
</script>

<style lang="css">



.lrg-flag {
  height: 100px
}

</style>