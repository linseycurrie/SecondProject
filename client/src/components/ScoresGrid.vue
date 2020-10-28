<template lang="html">
    <div id="scoresGrid">
        <score v-for="score in scores" :score="score"></score>
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