<script setup>

import { ref, onMounted } from 'vue'

import wyrService from "./services/wyrService.js";

import WouldYouRather from './components/WouldYouRather.vue';


//WYR questions
const wyrQuestion = ref('') //stores
const wyrAnswer1 =ref('')
const wyrAnswer2 =ref('')

//this will store the user's answer once they made a choice
const userSelection = ref('')

onMounted(() => {
  wyrService.getRandomWYR().then( (wyrData) => {
    //expect the data from wyr website
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

//this is the userUpdateSelection function
function updateUserSelected(userChoice) {
  userSelection.value = `Thanks! You chose: ${userChoice}`
}

</script> <!--End of the script set up-->

<template>

  <div id="app-component">
    <h1>Would You rather....</h1>

    <!-- Todo show a wouldyourather component-->
    <!--- Todo show users choice from the would you rather question-->
    <WouldYouRather 
    v-bind:question="wyrQuestion" 
    v-bind:answer1="wyrAnswer1" 
    v-bind:answer2="wyrAnswer2"
    v-on:answer-selected="updateUserSelected"

    ></WouldYouRather> <!--This will send the data to would you rather-->
  
    <p>{{  userSelection }}</p>
  </div>
</template> <!--End of the template-->

<style scoped>

/* Todo add any styles for this component here */

#app-component {
  /*font-size: 3em;*/
  background-color: aqua;
  padding: 40px;
}

p {
  font-family: 'Courier New', Courier, monospace;
}

</style>
