<template>
    <div id="quiz-wrapper" v-show="this.quizList.length > 0">
      <form action="">
      <p id = "question"> What is the population of {{answer.name}}? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quizList" :key="index" id="choices" > 
          {{entry.population}}
          <input type="radio" id="population-choice" name="population" :value="entry.population" v-model="population">
        </div>
      </div>

      <p id = "question"> What region is {{answer.name}} in? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quizList" :key="index" id="choices" > 
          {{entry.region}}
          <input type="radio" id="region-choice" name="region" :value="entry.region" v-model='region'>
        </div>
      </div> 

      <button v-on:click="compare" > Check Answers </button>
    </form>
    </div>
 
</template>

<script>
import {eventBus} from '../main.js'

export default {
    name: "quizdetail",
    
    data() {
        return {
            answer: null,
            population: null,
            region: null,
            score: 0 ,
            quizList: []
              }
            },
    components: {
      
    },
    computed: {

    },
      
    mounted() {
        // this.getAnswer(),
        
        eventBus.$on('quizList', (quizList) => {
           this.quizList = quizList
           this.getAnswer()
        })
    },
             
    methods: {
        getRandomInt: function() {
          return Math.floor(Math.random() * 4);
        },
        getAnswer: function() {
          let index = this.getRandomInt();
          this.answer = this.quizList[index]
        },

        

        compare: function(event){
          event.preventDefault()
          let userAnswers = []
          if (this.answer.population === this.population) {
            userAnswers.push(50)
          };
          if (this.answer.region === this.region) {
            userAnswers.push(50)
          };
          this.score = userAnswers.reduce((a,b) => a + b, 0)
          console.log(this.score)
        },

        shuffleArray: function(array) {
          for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          }} 
          } 

    }
</script>

<style>
#quiz-wrapper {
  display: flex;
  flex-direction: column;
}
#question {
  width: 100%
}
#choice-wrapper{
  display: flex;
  flex-direction: row wrap;
  justify-content: space-between;
}
#choices {
  background-color: blanchedalmond;
}
</style>