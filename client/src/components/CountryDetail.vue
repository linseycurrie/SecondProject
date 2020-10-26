<template>
  <div v-if="selectedCountry" id="selected-country">

      <img class="lrg-flag" :src="selectedCountry.flag" alt="">


    <h3> Name:{{ selectedCountry.name }} </h3>
    <h3> Capital City:{{ selectedCountry.capital }} </h3>
    <h3> Region:{{ selectedCountry.subregion }}, {{ selectedCountry.region }} </h3>
    <h3> Area:{{ selectedCountry.area }}km²</h3>
    <h3> Currency:{{ selectedCountry.currencies[0].name }} - {{ selectedCountry.currencies[0].symbol }} </h3>
  
  </div>

</template>

<script>

export default {
  
  name: 'country-detail',
  props: ['selectedCountry'],

  //   data() {
  //     return {
  //     countries: [],
  //     selectedCountry: null,
  //     quizList: []
  //   }
  // },

  //   computed: {
  //     addToQuizList: function() {
  //     this.quizList.push(this.selectedCountry)
  //     if (this.quizList.length > 4) {
  //       this.quizList.splice(0, 1)
  //     }
  //   },  

  // },


}
</script>

<style lang="css">

.lrg-flag {
  height: 100px
}

</style>