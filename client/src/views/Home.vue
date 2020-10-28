<template >
<div>
  <div id="images">
      <img id="pic" class="img" src="../assets/Geography.svg" alt="">
      <img id="pic" class="img" src="../assets/Maths.svg" alt="">
      <img id="pic" class="img" src="../assets/English.svg" alt="">
  </div>
    <div id="images2">
      <img id="pic2" class="animate__animated animate__bounce" src="../assets/cute-brain-cartoon.png">
      </div>
    <div id="images3">
      <img id="pic3" class="img" src="../assets/Science.svg" alt="">
      <img id="pic3" class="img" src="../assets/History.svg" alt="">
      <img id="pic3" class="img" src="../assets/Languages.svg" alt="">
  </div>

  <scores-grid score="score"/>
    </div>

    
</template>

<script>

import ScoresGrid from '@/components/ScoresGrid';

export default {



    components: {
        'scores-grid': ScoresGrid
    }

}
</script>

<style lang="css" scoped>

/* #home {
    display: flex;
    flex-direction: column
} */

.img {
height: 200px;
width: 200px;
}
 #images {
     display: flex;
     flex-direction: column wrap;
 }
 #images2 {
     display: flex;
     flex-direction: column wrap;
 }
  #images3 {
     display: flex;
     flex-direction: column wrap;
 }
#pic {
    padding: 10px
}
#pic2 {
    padding: 10px
}
#pic3 {
    padding: 10px
}
</style>