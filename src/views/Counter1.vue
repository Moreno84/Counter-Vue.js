<template>
  <div class="container">
    <h1>Counter 1</h1>
    <Counter/>
    <div class="buttons">
      <button class="w-50 p-1" @click="storeCounter.increaseCount">+</button>
      <button class="w-50 p-1" @click="storeCounter.decreaseCount">-</button>
      <div class="reset">
        <button @click="storeCounter.resetCount">Reset</button>
      </div>
      
    </div>
    <hr>
    <div>
      This counter is: {{storeCounter.oddOrEven}}
    </div>
    <hr>
    <div>
    <h3>Editing counter</h3>
    <input type="number" v-model="storeCounter.count"/>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { computed } from '@vue/runtime-core';
import Counter from '../components/Counter.vue';

const storeCounter = useCounterStore();

</script>


<style>
  /* .count{
    font-size: 60px;
    margin: 20px;
  }

  .buttons button{
    font-size: 40px;
    margin: 10px;
  }

.reset button {
   font-size: 40px;
  } */

  

</style>