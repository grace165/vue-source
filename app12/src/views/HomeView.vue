<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import HomeNavBar from '../components/HomeNavBar.vue';
import ItemsNavBar from '../components/ItemsNavBar.vue';

//const props = defineProps(['main'])

const imgSrc = ref("grem.jpg")

</script>

<template>
  <nav>
    <HomeNavBar />
    <ItemsNavBar />
  </nav>
  <br>
  <hr>
  <main>
    <RouterView/>
  </main>
  <h1> Cats for ME-ow! </h1>
  <p> Pictures of my cat...for MY viewing pleasure!</p>
  <img :src="imgSrc" />
</template>

<style>
html {
  background-color: pink;
}

body{
  position: relative;
  margin: 5%;
}

h1 {
  text-align: center;
  align-items: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
  color: darkmagenta;
  font-family: sans-serif;
  font-size: xx-large;
}

p {
  text-align: center;
  align-items: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
  color: rgb(119, 10, 119);
  font-family: sans-serif;
  font-size: large;
}

nav {
  font-size: large;
  color: blue;

}

nav:hover {
  color: magenta;
}

hr {
  width: auto;
  background-color: darkmagenta;
  height: 2px;
  border: none;
}

img {
  height: 600px;
  width: 600px;
  border-radius: 10px;
  border-color: white;
  border-style: solid;
  border-width: 10px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  margin-bottom: 20px;
}
</style>
