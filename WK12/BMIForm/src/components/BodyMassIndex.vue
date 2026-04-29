<script setup>
import { ref, defineEmits } from 'vue'

defineProps({
  question1 : String,
  question2 : String,
})

const emit = defineEmits([
  'answer-Height',
  'answer-Weight'
])

const inputHeight = ref ('')
const inputWeight = ref('')

function InputHeight() {
  emit('answer-Height', inputHeight.value)
}
function InputWeight() {
  emit('answer-Weight', inputWeight.value)
}
</script>

<template>

<div>

  <h2>Enter your height and weight</h2>


  <div>
    <label for="answer-1">{{ question1 }}</label>
    <input v-on:input="InputHeight" type="textbox" id="answer-1" v-model="inputHeight">
  </div>

  

  <div>
    <label for="answer-2">{{ question2 }}</label>
    <input v-on:input="InputWeight" type="textbox" id="answer-2" v-model="inputWeight">
  </div>

  <div>
    <button id="Submit">Calculate!</button>
  </div>

</div>

</template>

<style scoped>


</style>
