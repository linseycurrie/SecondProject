<template>
<div v-if="this.score">
    <form  v-on:submit="addScore" method="post" id="scores-form">
      <h3>Save your score!</h3>
      <div>
          <label for="name">Enter your name:</label>
          <input type="text" id="name" v-model="name" required> Score: {{score}}
          <button type="submit">Save</button>
      </div> 
  </form>

</div>
</template>

<script>

import {eventBus} from '../main.js'
import QuizDetail from './QuizDetail'
import ScoresService from '../services/ScoresService'



export default {
    name: 'scores-form',
    data() {
        return {
            name: '',
            score: null,
            
        }
    },

    mounted() {
        eventBus.$on('score', (score) => {
        this.score = score;
        })
    },

    methods: {
        addScore(e) {
            e.preventDefault()
            const result = {
                name: this.name,
                score: this.score,
            }
            ScoresService.postScore(result)
            .then(res => eventBus.$emit('score-added', res))
        }
    }
}    
</script>

<style>

</style>