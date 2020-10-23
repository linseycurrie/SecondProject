<template>
  <div v-if="selectedCountry" id="selected-country">

    <h3> Country name:{{ selectedCountry.name }} </h3>
    <h3> Capital City: {{ selectedCountry.capital }} </h3>
    <h3> Region: {{ selectedCountry.subregion }}, {{ selectedCountry.region }} </h3>

    <h3> {{ selectedCountry.currencies.name }} </h3>
  
  </div>

</template>

<script>
export default {

    name: 'country-detail',
    props: ['selectedCountry'],

}
</script>

<style>

</style>