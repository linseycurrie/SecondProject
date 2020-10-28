<template>
  <div id="grid-wrapper">
    <div id="quiz-wrapper"  v-show="this.quizList.length > 0">
      <form action="" class="grid-item">
      <p id = "question"> What is the population of {{answer.name}}? </p> 
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesOne" :key="index" id="choices" > 
          {{entry.population}}<br>
          <input type="radio" id="population-choice" name="population" :value="entry.population" v-model="population">
        </div>
      </div>
      <div v-if="this.answerOne"> <img src="data:image/png;base64,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"/> </div>
      <p id = "question"> What region is {{answer.name}} in? </p>
       
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesTwo " :key="index" id="choices" > 
          {{entry.region}}<br>
          <input type="radio" id="region-choice" name="region" :value="entry.region" v-model='region'>
        </div>
      </div> 
      <div v-if="this.answerTwo"> <img src="data:image/png;base64,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"/> </div>

      <p id = "question"> What are people from {{answer.name}} called? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesThree" :key="index" id="choices" > 
          {{entry.demonym}}<br>
          <input type="radio" id="demonym-choice" name="demonym" :value="entry.demonym" v-model='demonym'>
        </div>
      </div> 
      <div v-if="this.answerThree"> <img src="data:image/png;base64,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"/> </div> 
      <p id = "question"> What is the capital of {{answer.name}}? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesFour" :key="index" id="choices" > 
          {{entry.capital}}<br>
          <input type="radio" id="capital-choice" name="capital" :value="entry.capital" v-model='capital'>
        </div>
      </div> 
      <div v-if="this.answerFour"> <img src="data:image/png;base64,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"/> </div> 

      <p id = "question"> Which is the flag of {{answer.name}}? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesFive" :key="index" id="choices" > 
          <img :src='entry.flag' width=150 height=75><br>
          <input type="radio" id="flag-choice" name="flag" :value="entry.flag" v-model='flag'>
        </div>
      </div> 
       <div v-if="this.answerFive"> <img src="data:image/png;base64,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"/> </div> 

      <button v-on:click="compare" id="button"> Check Answers </button>
      <p v-if="complete">You scored {{this.score}}%! </p>
    </form>
    </div>
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
            complete: false,
            quesOne: [],
            quesTwo: [],
            quesThree: [],
            quesFour: [],
            quesFive: [],
            answerOne: false,
            answerTwo: false,
            answerThree: false,
            answerFour: false,
            answerFive: false,
        
        }
            },

    components: {
      
    },
    computed: {

    },
      
    mounted() {
        eventBus.$on('quizList', (quizList) => {
           this.quizList = quizList;
           this.quesOne = this.shuffle(quizList);
           this.quesTwo = this.shuffle(quizList);
           this.quesThree = this.shuffle(quizList);
           this.quesFour = this.shuffle(quizList);
           this.quesFive = this.shuffle(quizList);
           this.getAnswer();
        })

          
          this.shuffle(quesTwo, quesTwoTwo);
          this.shuffle(quesThree, quesThreeThree);

        

        // this.shuffle(this.quesThree)
        // this.shuffle(this.quesFour)
        // this.shuffle(this.quesFive)
  
    },
             
    methods: {
      getRandomInt: function(num) {
        return Math.floor(Math.random() * num);
      },
      getAnswer: function() {
        let index = this.getRandomInt(4);
        this.answer = this.quizList[index]
      },        

      compare: function(event){
        event.preventDefault()
        let userAnswers = []

        if (this.answer.population === this.population) {
          userAnswers.push(20)
          this.answerOne = true
        };
        if (this.answer.region === this.region) {
          userAnswers.push(20)
          this.answerTwo = true
        };
        if (this.answer.demonym === this.demonym) {
          userAnswers.push(20)
          this.answerThree = true
        };
        if (this.answer.flag === this.flag) {
          userAnswers.push(20)
          this.answerFive = true
        };
        if (this.answer.capital === this.capital) {
          userAnswers.push(20)
          this.answerFour = true
        };

        this.score = userAnswers.reduce((a,b) => a + b, 0)
        this.complete = true
      },

      shuffle:function(array) {
          let clone = []
          for(let element of array){
            clone.push(element)
          }
          for (let i = clone.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = clone[i];
          clone[i] = clone[j];
          clone[j] = temp;
        }
        return clone
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
  margin: 30px;
  
}
#choices {
  background-color: #8ECAE6;
  padding: 40px;
  text-align: center;
  width: 50%;
  margin: 10px;
  border: 2pt solid #023047;
  font-weight: bold;

}

#question {
  font-weight: bold;
  font-size: 20px
}

#button {
  border: 1pt solid #FB8500;
  background-color: #FFB703;
  font-weight: bolder;
  padding: 10px;
}
</style>