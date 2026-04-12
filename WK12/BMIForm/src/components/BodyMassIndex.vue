<script setup>
import { ref, watch } from 'vue'

defineProps({
  question1 : String,
  question2 : String,
  answer1 : Number,
  answer2 : Number,
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

  <h2>Enter your height and weight</h2>
  
  

  <div>
    {{ question1 }}
    <input v-bind:value="answer1" v-on:change="InputHeight" type="textbox" id="answer-1">
    <label for="answer-1">{{ answer1 }}</label>
  </div>

  

  <div>
    {{ question2 }}
    <input v-bind:value="answer2" v-on:change="InputHeight" type="textbox" id="answer-2">
    <label for="answer-2">{{ answer2 }}</label>

  </div>
    <button id="Submit">Calculate!</button>
  <div>

  </div>

</template>

<style scoped>


</style>
