<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main>
    <RouterView name="component1" class="c1"/>
    <RouterView name="component2" class="c2"/>
    <RouterView name="component3" class="c3"/>
    <RouterView name="component4" class="c4"/>
    <RouterView name="component5" class="c5"/>
    <RouterView name="component6" class="c6"/>
  </main>
</template>

<style>
html{
  padding: 20px;
  background-color: rgb(253, 159, 173);
}

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: lightpink;
}

body{
  margin: 0px;
  padding: 0px;
}

main {
  padding: 10px;
  display: grid;
  grid-template-areas:
    'c1 c1 c1 c1 c1 c1 c1 c1'
    'c2 c2 c3 c3 c3 c3 c3 c3'
    'c4 c4 c4 c4 c4 c4 c5 c5'
    'c6 c6 c6 c6 c6 c6 c6 c6';
  gap: 0px;
  flex-grow: 1;
  background-color: rgb(248, 193, 201);
}

.c1{
  grid-area: c1;
  background-color: rgb(255, 0, 119);
}

.c2{
  grid-area: c2;
  background-color: rgb(255, 80, 150);
}

.c3{
  grid-area: c3;
  background-color: rgb(250, 53, 145);
}

.c4{
  grid-area: c4;
  background-color: rgb(255, 106, 150);
}

.c5{
  grid-area: c5;
  background-color: rgb(245, 100, 136);
}

.c6{
  grid-area: c6;
  background-color: rgb(255, 140, 176);
}
</style>