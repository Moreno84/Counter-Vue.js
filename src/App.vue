<template>
  <div class="app">
      <nav>
        <RouterLink to="/counter1">Counter 1</RouterLink> |
        <RouterLink to="/counter2">Counter 2</RouterLink>
      </nav>
    <RouterView />
  </div>
</template>

<style>
  .app{
    text-align: center;
  }
</style>


