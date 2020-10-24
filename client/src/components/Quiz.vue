<template>
  <div id="quiz">
      This is where the Quiz will go for now
  </div>
</template>

<script>


export default {
name: "quiz",
props: ['quizList'],
data() {
    return {
        quizList: []
    }
},
mounted() {
    eventBus.$on('addToQuizList', (selectedCountry) => {
      this.quizList.push(selectedCountry) }) 
}
}

</script>

<style>

</style>