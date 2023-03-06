<script>
import Slideshow from './components/Slideshow.vue'

export default {
  components: {
    Slideshow
  }
}
</script>

<template>
  <h1>Trains Go Choo-Choo</h1>
  <Slideshow></Slideshow>


</template>

<style>
h1 {
  font-family: sans-serif;
  color: darkred;
  text-align: center;
  font-size: 80px;
}

#Slideshow {
  align-content: center;
  background-color: cornflowerblue;
  border-radius: 25px;
  border-color: white;
  border-width: 5px;
}
</style>
