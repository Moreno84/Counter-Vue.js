<template>
  <div class="home">
    <div class="count" :class="color">
        {{count}}
    </div>
    <div class="buttons">
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
      <div class="reset">
        <button @click="reset">Reset</button>
      </div>
      
    </div>
    <hr>
    <div>
      The number is: {{oddEven}}
    </div>
    <hr/>
    <input type="number" v-model="count"/>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const count = ref(0);

const increase = () => count.value++;

const decrease = () => count.value--;

const reset = () => count.value = 0;

const oddEven = computed(()=>{
  if(count.value % 2 === 0){
    return "Even"
  }else{
    return "Odd"
  }
})

const color = computed(()=>{
  if(count.value === 0){
    return 'red'
  }else{
    return 'green'
  }
})




</script>


<style>
  .count{
    font-size: 60px;
    margin: 20px;
  }

  .buttons button{
    font-size: 40px;
    margin: 10px 5px
  }

.reset button {
    border-radius: 15px;
  }

  

</style>