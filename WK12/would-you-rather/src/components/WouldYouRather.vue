<script setup>
import { ref, watch } from 'vue'


defineProps({
  question: String, //this will define the question answer as a string
  answer1: String,
  answer2: String
})

const emit = defineEmits([
  'answer-selected'
])
const choice = ref('') //This will store the answer to the wyr question only one answer

//function choiceMade() { //This is the v-on choicemade 
 //emit event to tell parent that user has made a choice 
 //emit('answer-selected', choice.value)
//}

watch(choice, () => {

  emit('answer-selected', choice.value) // this does the same as the choiceMade function but through vue 

})

</script> <!--end of script setup-->

<template>
  <div id="wyr">
    <h2>Make your choice!</h2>

    <p>{{ question }}</p>

    <div>
      <input v-model="choice" v-bind:value="answer1"  type="radio" id="answer-1">
      <label for="answer-1">{{ answer1 }}</label>

      <input  v-model="choice" v-bind:value="answer2"  type="radio" id="answer-2">
      <label for="answer-2">{{ answer2 }}</label>
      <!-- TODO show question text-->
      <!-- Todo Show radio buttons, one for each choice-->
    </div>

  </div>

</template> <!--End of template-->

<style scoped>

/* Todo any styles for this component go gere */

#wyr {
  background-color: hotpink;
}

p {
  font-family: fantasy;
}
</style>
