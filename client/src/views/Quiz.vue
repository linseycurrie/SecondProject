<template>
  <div>
    <quizdetail />
    <scoresForm />
    <!-- <scoresGrid /> -->
  </div>
</template>

<script>
import QuizDetail from '@/components/QuizDetail.vue'
import ScoresForm from '@/components/ScoresForm.vue'
// import ScoresGrid from '@/components/ScoresGrid.vue'

export default {
    components: {
        'quizdetail': QuizDetail,
        'scoresForm': ScoresForm,
        // 'scoresGrid': ScoresGrid
    
    }
}


</script>

<style>

</style>