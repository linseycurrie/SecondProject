<template>
  <div id="quiz">
      This is where the Quiz will go for now
      <div v-if="(quizList.length <= 4)"> Quiz adequate Length </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
    name: "quiz",
    props: ['quizList'],
    data() {
        return {
        
    }
},
    computed: {
    
}, 

    mounted() {
        eventBus.$on('addToQuizList', (selectedCountry) => {
        this.quizList.push(selectedCountry) }) ,
        listLength()
},   
    methods()  {
        listLength = function() {
        if (this.quizList.length < 4) {
            this.quizList.splice(0, 1)
        }
    }  
  }
  
}

</script>

<style>

</style>