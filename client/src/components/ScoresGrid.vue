<template lang="html">
<div v-if="scores">
    
    <table class="table" style=width:100%>
        <thead>
            <h2>Score Board</h2>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(score, index) in scores" >    
                <td>{{score.name}}</td>
                <td>{{score.score}}</td>
            </tr>
        </tbody>
    </table>
</div>
  
</template>

<script>

import { eventBus } from '@/main.js'
import Score from './Score';
import ScoresService from '../services/ScoresService'


export default {
    name: 'scores-grid',
    props: ['scores'],
    data(){
        return{

        }
    },

    components: {
        'score': Score
    },

    mounted(){
        this.fetchScores()
    },
    methods: {
        fetchScores() {
            ScoresService.getScores()
            .then(scores => this.scores = scores);
            },  
    }
}
</script>

<style>

</style>