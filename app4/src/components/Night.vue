<script setup>

import { ref }  from 'vue'

const title = ref("Starry Night")
const imgSrc = ref("./src/assets/starry_night.jpg")

</script>

<template>
  <div id="Night">
    <h1> {{ title }} </h1>
   <img :src="imgSrc"/>
</div>
</template>
  
<style>
  #Night {
    aspect-ratio: 1 / 1;
    background-color: rgb(22, 22, 82);
    border-radius: 200px;
    font-size: xx-large;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #Night:hover{
      background-image: linear-gradient(to right, pink, magenta, orange);
    }

  img {
    display: inline-block;
    width: 75%;
    border-radius: 50px;
  }
  template{
      justify-content: center;
      position: flex;
  }
  </style>