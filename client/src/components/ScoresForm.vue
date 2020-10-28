<template>
<div>
    <div v-if="this.score">
        <form v-on:submit="addScore" id="scores-form">
            <h3>Save your score!</h3>
            <div>
                <label for="name">Enter your name:</label>
                <input type="text" id="name" v-model="name" required>Score: {{score}}
                <button type="submit">Save</button>
            </div>
        </form>
</div>
<div v-if="scores">
        <scoresGrid :scores="scores"/>
</div>
</div>
 
</template>

<script>

import {eventBus} from '../main.js'
import QuizDetail from './QuizDetail'
import ScoresService from '../services/ScoresService'
import ScoresGrid from '@/components/ScoresGrid.vue'



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
        components: {
        'scoresGrid': ScoresGrid
    
    },

    methods: {
        addScore(e) {
            e.preventDefault()
            const score = {
                name: this.name,
                score: this.score,
            }
            ScoresService.postScore(score)
            .then(() => {this.fetchScores()})
        },
        fetchScores() {
            ScoresService.getScores()
            .then(scores => this.scores = scores);
            },  
    }
}    
</script>

<style>

</style>