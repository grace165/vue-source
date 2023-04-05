<script setup>
import { ref } from 'vue'
import Movie1 from "./components/Movie1.vue"
import Movie2 from "./components/Movie2.vue"
import Movie3 from "./components/Movie3.vue"

const activeComponent = ref(Movie1)

//button to use transition between components 

</script>

<template>
  <main>
    <br>
    <h1>MOVIES OF THE MONTH</h1>
    <br>
  </main>
  <br>
  <br>
  <div class="buttons">
    <label>
      <input type="radio" name="movie" v-model="activeComponent" :value="Movie1" /> Movie 1
    </label>
    <label>
      <input type="radio" name="movie" v-model="activeComponent" :value="Movie2" /> Movie 2
    </label>
    <label>
      <input type="radio" name="movie" v-model="activeComponent" :value="Movie3" /> Movie 3
    </label>
  </div>

  <div class="movie">
    <div class="movie1">
      <transition name="translate" mode="out-in">
        <component :is="activeComponent"></component>
      </transition>
    </div>
  </div>
  <br>
</template>

<style>
html {
  background-color: navy;
  padding: 10px;
  accent-color: red;
  color: white;
  font-size: 20px;
  text-align: center;
}

main {
  background-color: blue;
  color: lightskyblue;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  font-size: 30px;
  text-align: center;
  font-family: sans-serif;
  border-style: dotted;
  border-color: yellow;
  border-width: 10px;
  accent-color: red;
}

.movie {
  height: 800px;
}

.translate-enter-active,
.translate-leave-active {
  transition: all 0.5s ease;
}

.translate-enter-from{
  opacity: 0;
  transform: translateX(30px);
}

.translate-leave-to{
  opacity: 0;
  transform: translateX(-30px);
}
</style>