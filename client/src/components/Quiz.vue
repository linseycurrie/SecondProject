<template>
  <div id="quiz">
      <div id ="questions">
          <div>
          <p> Which is spoken in {{answer.name}}? </p>
          <div v-for="(country, index) in this.quizList" :key="index"> 
             {{country.languages[0].name}}
             <input type="radio" id="language-choice" name="language-choice" value="language">
             </div>
             <div>
             <p> Which is the population of {{answer.name}}? </p>
             <div v-for="(country, index) in this.quizList" :key="index"> 
             {{country.population}}
             <input type="radio" id="population-choice" name="population-choice" value="population">
             </div>
             </div>
             <div>
             <p> What reigon is {{answer.name}} in? </p>
             <div v-for="(country, index) in this.quizList" :key="index"> 
             {{country.region}}
             <input type="radio" id="region-choice" name="region-choice" value="region">
             </div>
             </div>
          </div>
      </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
    name: "quiz",
    props: ['quizList'],
    data() {
        return {
            answer: [],
    }
},
    computed: {
        getAnswer(){
            let index = getRandomInt(4);
            const answer = this.quizList[index]
            }
        },
    mounted() {
        eventBus.$on('addToQuizList', (selectedCountry) => {
        this.quizList.push(selectedCountry) })
        },

    methods: {
        getRandomInt: function() {
         return Math.floor(Math.random() * Math.floor(4));
        }
} }

</script>

<style>
#quiz {
    display: flex;
    flex-direction: column wrap;
}
#questions {
    width: 100%;
}
</style>