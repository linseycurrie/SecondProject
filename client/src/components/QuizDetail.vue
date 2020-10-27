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

      <p id = "question"> What region is {{answer.name}} in? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesTwo " :key="index" id="choices" > 
          {{entry.region}}<br>
          <input type="radio" id="region-choice" name="region" :value="entry.region" v-model='region'>
        </div>
      </div> 

      <p id = "question"> What are people from {{answer.name}} called? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesThree" :key="index" id="choices" > 
          {{entry.demonym}}<br>
          <input type="radio" id="demonym-choice" name="demonym" :value="entry.demonym" v-model='demonym'>
        </div>
      </div> 

      <p id = "question"> What is the capital of {{answer.name}}? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesFour" :key="index" id="choices" > 
          {{entry.capital}}<br>
          <input type="radio" id="capital-choice" name="capital" :value="entry.capital" v-model='capital'>
        </div>
      </div> 

      <p id = "question"> Which is the flag of {{answer.name}}? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesFive" :key="index" id="choices" > 
          <img :src='entry.flag' width=150 height=75><br>
          <input type="radio" id="flag-choice" name="flag" :value="entry.flag" v-model='flag'>
        </div>
      </div> 

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
#grid-wrapper {
  display: grid;
  grid-template-columns: 40% body body body 40%;
  align-items: center;
}

.grid-item {
  grid-area: body;
 
}

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