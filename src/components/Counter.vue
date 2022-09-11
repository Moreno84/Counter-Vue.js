<template>
    <div class="count">
        <h1>{{storeCounter.count}}</h1>
    </div>
</template>

<script setup>
 
 import { useCounterStore } from '../stores/counter';

 const storeCounter = useCounterStore();

</script>