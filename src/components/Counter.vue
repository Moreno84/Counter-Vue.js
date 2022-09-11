<template>
    <div class="count">
        <h1
        :class="colorCounter"
        >{{storeCounter.count}}</h1>
    </div>
</template>

<script setup>
 
 import { useCounterStore } from '../stores/counter';
 import {computed} from 'vue';

 const storeCounter = useCounterStore();

 const colorCounter = computed(()=>{
    if(storeCounter.count > 0){
        return 'text-success'
    }

    if(storeCounter.count === 0){
        return 'text-warning'
    }else{
        return 'text-danger'
    }

})

</script>