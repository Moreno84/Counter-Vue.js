<template>
  <div class="container">
    <div class="title">
        <h1>Counter 2</h1>
    </div>
    <div class="buttons">
    <button
     class="counter-button"
     @click="storeCounter.increaseCount">
        {{storeCounter.count}}
      </button>
    </div>
    <div class="input">
      <input 
      type="number"
      class="mt-1"
      v-model="storeCounter.count"
      >
    </div>
  </div>
</template>

<script setup>

import { useCounterStore } from '../stores/counter'

const storeCounter = useCounterStore();

</script>

<style>

  .counter-button{
    font-size: 50px;
  }

</style>
