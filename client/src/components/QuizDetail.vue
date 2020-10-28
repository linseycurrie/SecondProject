<template>
  <div>
      <img id= "logo" src="https://devonwithkids.co.uk/wp-content/uploads/2020/04/Quiz-300x223.jpg" alt="quiz-title">
    <div id="quiz-wrapper"  v-show="this.quizList.length > 0">
      
      <form action="">
      <p id = "question"> What is the population of {{answer.name}}? </p> 
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesOne" :key="index" id="choices" > 
          {{entry.population}}<br>
          <input type="radio" id="population-choice" name="population" :value="entry.population" v-model="population">
        </div>
      </div>
      <div v-if="this.answerOne == 1"> <img src="@/assets/tick.png"/> </div>
      <div v-else-if="this.answerOne == 2"> <img src="@/assets/cross.png" ></div>
      <p id = "question"> What region is {{answer.name}} in? </p>
       
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesTwo " :key="index" id="choices" > 
          {{entry.region}}<br>
          <input type="radio" id="region-choice" name="region" :value="entry.region" v-model='region'>
        </div>
      </div> 
      <div v-if="this.answerTwo == 1"> <img src="@/assets/tick.png"/> </div>
      <div v-else-if="this.answerTwo== 2"> <img src="@/assets/cross.png" ></div>

      <p id = "question"> What are people from {{answer.name}} called? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesThree" :key="index" id="choices" > 
          {{entry.demonym}}<br>
          <input type="radio" id="demonym-choice" name="demonym" :value="entry.demonym" v-model='demonym'>
        </div>
      </div> 
      <div v-if="this.answerThree == 1"> <img src="@/assets/tick.png"/> </div>
      <div v-else-if="this.answerThree == 2"> <img src="@/assets/cross.png" ></div>
      <p id = "question"> What is the capital of {{answer.name}}? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesFour" :key="index" id="choices" > 
          {{entry.capital}}<br>
          <input type="radio" id="capital-choice" name="capital" :value="entry.capital" v-model='capital'>
        </div>
      </div> 
      <div v-if="this.answerFour == 1"> <img src="@/assets/tick.png"/> </div>
      <div v-else-if="this.answerFour == 2"> <img src="@/assets/cross.png" ></div>

      <p id = "question"> Which is the flag of {{answer.name}}? </p>
      <div id="choice-wrapper">
        <div v-for="(entry, index) in this.quesFive" :key="index" id="choices" > 
          <img :src='entry.flag' width=150 height=75><br>
          <input type="radio" id="flag-choice" name="flag" :value="entry.flag" v-model='flag'>
        </div>
      </div> 
      <div v-if="this.answerFive == 1"> <img src="@/assets/tick.png"/> </div>
      <div v-else-if="this.answerFive == 2"> <img src="@/assets/cross.png" ></div>

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
            score: 0,
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
            answerOne: 0,
            answerTwo: 0,
            answerThree: 0,
            answerFour: 0,
            answerFive: 0,
        
        }
            },

    components: {
      
    },
    computed: {

    },
      
    mounted() {
        eventBus.$on('quizList', (quizList) => {
           this.quizList = quizList;
           this.getAnswer();
           this.quesOne = this.shuffle(quizList);
           this.quesTwo = this.shuffle(quizList);
           this.quesThree = this.shuffle(quizList);
           this.quesFour = this.shuffle(quizList);
           this.quesFive = this.shuffle(quizList);
           
        })
  
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
          this.answerOne = 1
        } else {
          this.answerOne = 2
        };
        if (this.answer.region === this.region) {
         userAnswers.push(20)
          this.answerTwo = 1
        } else {
          this.answerTwo = 2
        };
        if (this.answer.demonym === this.demonym) {
          userAnswers.push(20)
          this.answerThree = 1
        } else {
          this.answerThree = 2
        };
        if (this.answer.flag === this.flag) {
          userAnswers.push(20)
          this.answerFive = 1
        } else {
          this.answerFive = 2
        };
        if (this.answer.capital === this.capital) {
          userAnswers.push(20)
          this.answerFour = 1
        } else {
          this.answerFour = 2
        }

        this.score = userAnswers.reduce((a,b) => a + b, 0)
        this.complete = true
        eventBus.$emit('score', this.score)
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
  margin-left: 140px
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
#logo{
  margin-left: 150px 
}
</style>