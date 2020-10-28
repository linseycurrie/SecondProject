<template>
    <div>
        <div>
<form v-on:submit="addScore" method="post" id="scores-form">
      <h3>Save your score!</h3>
      <div>
          <label for="name">Enter your name:</label>
          <input type="text" id="name" v-model="name" required>Score: {{score}}
      </div>
</form>
    </div>


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
            scores: [],
            
        }
    },

    mounted() {
        eventBus.$on('score', (score) => {
        this.score = score;
        })
    },

    methods: {
        fetchScores() {
        ScoresService.getScores()
        .then(scores => this.scores = scores);
        },   
        
        addScore(e) {
            e.preventDefault()
            const score = {
                name: this.name,
                score: this.score,
            }
            ScoresService.postScore(score)
            .then(res => eventBus.$emit('score-added', res))
        }
    }
}    
</script>

<style>

</style>