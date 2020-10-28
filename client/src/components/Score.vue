<template lang="html">
    <div class="booking">
        <h3>Name: {{ score.name }}</h3>
        <h4>Score: {{ score.score }}</h4>

    </div>
</template>

<script>
import ScoresService from '@/services/ScoresService.js'

export default {
    name: 'score',
    props: ['score'],
    
}
</script>

<style>

</style>