<template>
  <div>
  
  <!-- <div v-if="selectedCountry" id="selected-country">

    <h3> {{ selectedCountry[0].name }} </h3>
    <img class="lrg-flag" :src="selectedCountry[0].flag" alt="">
    <p v-if="selectedCountry[0].region !==''">{{ selectedCountry[0].name }} is located in {{ selectedCountry[0].region }}.</p>
    <p>The size of {{ selectedCountry[0].name }} is {{ selectedCountry[0].area.toLocaleString() }}km².</p>
    <p v-if="selectedCountry[0].capital !==''">The Capital City of {{ selectedCountry[0].name }} is {{ selectedCountry[0].capital }}.</p>
    <p>{{ selectedCountry[0].population.toLocaleString() }} people live in {{ selectedCountry[0].name }}.</p>
    <p v-if="selectedCountry[0].demonym !==''">People from {{ selectedCountry[0].name }} are known as {{ selectedCountry[0].demonym }}.</p>
  
  </div> -->

  <div v-if="selectedCountry" id="selected-country">

    <h3> {{ selectedCountry.name }} </h3>
    <img class="lrg-flag" :src="selectedCountry.flag" alt="">
    <p v-if="selectedCountry.region !==''">{{ selectedCountry.name }} is located in {{ selectedCountry.region }}.</p>
    <p>The size of {{ selectedCountry.name }} is {{ selectedCountry.area.toLocaleString() }}km².</p>
    <p v-if="selectedCountry.capital !==''">The Capital City of {{ selectedCountry.name }} is {{ selectedCountry.capital }}.</p>
    <p>{{ selectedCountry.population.toLocaleString() }} people live in {{ selectedCountry.name }}.</p>
    <p v-if="selectedCountry.demonym !==''">People from {{ selectedCountry.name }} are known as {{ selectedCountry.demonym }}.</p>
  
  </div>

  
  </div>
</template>

<script>

export default {
  
  name: 'country-detail',
  props: ['selectedCountry']

}
</script>

<style lang="css">

#selected-country {
  font-weight: bold;
  color: #FB8500;
}

.lrg-flag {
  height: 100px
}

</style>