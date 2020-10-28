<template>
  <div>
        <quizdetail />

        <scoresForm />

  </div>
</template>

<script>
import QuizDetail from '@/components/QuizDetail.vue'
import ScoresForm from '@/components/ScoresForm.vue'

export default {
    components: {
        'quizdetail': QuizDetail,
        'scoresForm': ScoresForm
        }
}
</script>

<style>

</style>