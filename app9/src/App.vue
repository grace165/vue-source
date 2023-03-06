<script setup>
import { reactive } from 'vue'
import Audio from './components/Audio.vue'
import jsonObject from './assets/metadata.json'

let audioInfo = {
  label: "lotr ost",
  duration: "4:00",
  audioFile: "may_it_be.mp3"
}

const audioFiles = reactive(jsonObject.audio)

</script>

<template>
  <h1>The Lord of the Rings OST</h1>
  <div id="Audio">
      <Audio v-for="value in audioFiles" v-bind=value>
          {{ value.label }} ,
          {{ value.audioFile }} , 
          {{ value.duration }}
      </Audio>
    </div>
</template>

<style>
html {
  background-color: rgb(185, 240, 185);
}

h1 {
  font-size: 50px;
  font-family: sans-serif;
  color: rgb(27, 95, 27);
  text-align: center;
}

#Audio {
  background-color: rgb(125, 179, 125);
  width: 800px;
  height: auto;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  align-content: center;
  border-radius: 25px;
  border-color: white;
  border-width: 5px;
}
</style>
