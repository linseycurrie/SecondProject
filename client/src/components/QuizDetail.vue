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

      <p id = "question"> What are people from {{answer.name}} called? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quizList" :key="index" id="choices" > 
          {{entry.demonym}}
          <input type="radio" id="demonym-choice" name="demonym" :value="entry.demonym" v-model='demonym'>
        </div>
      </div> 

      <p id = "question"> What is the capital of {{answer.name}}? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quizList" :key="index" id="choices" > 
          {{entry.capital}}
          <input type="radio" id="capital-choice" name="capital" :value="entry.capital" v-model='capital'>
        </div>
      </div> 

      <p id = "question"> Which is the flag of {{answer.name}}? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quizList" :key="index" id="choices" > 
          <img :src='entry.flag' width=150 height=75>
          <input type="radio" id="flag-choice" name="flag" :value="entry.flag" v-model='flag'>
        </div>
      </div> 

      <button v-on:click="compare" > Check Answers </button>
      <p v-if="complete">You scored {{this.score}}%! </p>
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
            quizList: [],
            demonym: null, 
            capital: null,
            flag: null,
            complete: false

        }
            },

    components: {
      
    },
    computed: {

    },
      
    mounted() {
        eventBus.$on('quizList', (quizList) => {
           this.quizList = quizList
           this.getAnswer()
        });

        this.shuffleQuiz(this.quizList)
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
          userAnswers.push(20)
        };
        if (this.answer.region === this.region) {
          userAnswers.push(20)
        };
        if (this.answer.demonym === this.demonym) {
          userAnswers.push(20)
        };
        if (this.answer.flag === this.flag) {
          userAnswers.push(20)
        };
        if (this.answer.capital === this.capital) {
          userAnswers.push(20)
        };

        this.score = userAnswers.reduce((a,b) => a + b, 0)
        this.complete = true
      },

      shuffleArray: function(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        } },
        
      shuffleQuiz: function(quizList) {
          
      }
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
  justify-content: space-around;
}
#choices {
  background-color: blanchedalmond;
}
</style>