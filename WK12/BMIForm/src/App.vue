<script setup>
import BodyMassIndex from './components/BodyMassIndex.vue'

import { ref, computed } from 'vue'
//the questions to display
const bmiHeightQues = ref('What is your height (in Meters)?')
const bmiWeightQues = ref('Weight (in Kilograms)?')

const userWeight = ref() //Storing the users information
const userHeight = ref()

function updateUserInputHeight(userInput){
  userHeight.value = userInput
}

function updateUserInputWeight(userInput){
  userWeight.value = userInput
}

const bmi = computed( () => {
  return userWeight.value / (userHeight.value * userHeight.value)
})

</script> <!--End of Script-->

<template>

<h1>Body Mass Index</h1>

<BodyMassIndex
v-bind:question1="bmiHeightQues"
v-bind:question2="bmiWeightQues"
v-on:answer-Height="updateUserInputHeight"
v-on:answer-Weight="updateUserInputWeight"
></BodyMassIndex>

<p>Your BMI is: {{ bmi }}</p>
</template> <!---End of template-->

<style scoped>

</style><!---End of style-->
