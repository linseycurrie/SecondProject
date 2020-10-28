<template>
<div>
    <!-- <table class="table" style="width:100%">
    <thead>
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{{this.name}}</td>
            <td></td>

        </tr>
    </tbody>
    </table> -->


    <div id="scoresGrid">
        <score v-for="(score, index) in scores" :key="index" :score="score"></score>
    </div>
</div>
</template>
<script>

import { eventBus } from '@/main.js'
import Score from './Score';

export default {
    name: 'scores-grid',
    props: ['scores'],

    components: {
        'score': Score
    },
}

</script>


<style>

</style>