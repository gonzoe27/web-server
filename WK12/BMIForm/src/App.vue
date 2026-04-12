<script setup>
import BodyMassIndex from './components/BodyMassIndex.vue'

import { ref } from 'vue'
//the questions to display
const bmiHeightQues = ref('What is your height (in Meters)?')
const bmiWeightQues = ref('Weight (in Kilograms)?')

const userWeight = ref('') //Storing the users information
const userHeight = ref('')

function updateUserInputHeight(userInput){
  userHeight.value = userInput
}

function updateUserInputWeight(userInput){
  userWeight.value = userInput
}

</script> <!--End of Script-->

<template>

<h1>Body Mass Index</h1>

<BodyMassIndex
v-bind:question1="bmiHeightQues"
v-bind:question2="bmiWeightQues"
v-bind:answer1="userHeight"
v-bind:answer2="userWeight"
v-on:answer-height="updateUserInputHeight"
v-on:answer-weight="updateUserInputWeight"
></BodyMassIndex>

</template> <!---End of template-->

<style scoped>

</style><!---End of style-->
