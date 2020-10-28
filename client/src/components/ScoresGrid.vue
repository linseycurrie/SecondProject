<template lang="html">
<div v-if="scores">

    <!-- <p v-for="(score, index) in scores">{{score.name}} {{score.score}}</p> -->

    <table class="table" style=width:100%>
        <thead>
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
        </thead>
        <tbody/>
        <tr v-for="(score, index) in scores" >    
            <td>{{score.name}}</td>
            <td>{{score.score}}</td>
        </tr>
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
        // this.fetchScores()
    },

    methods:{

        }
}

</script>


<style>

</style>