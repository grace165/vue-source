<script setup>
import { ref } from 'vue'

const imgSrc = ref("grem_8.jpg")

</script>

<template>
    <div class="movies">
        <br>
        <img :src="imgSrc" />
        <h2>The BFG: Big Friendly Gremlin</h2>
        <p>April 29, 2023</p>
    </div>
</template>

<style>
.movies {
    background-color: red;
    border-style: solid;
    border-color: yellow;
    border-radius: 5px;
    border-width: 10px;
    text-align: center;
    height: auto;
    width: auto;
    color: black;
}

img{
    border-radius: 5px;
    height: 600px;
}

h2 {
    font-size: xx-large;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}

p {
    font-size: xx-large;
    color: black;
}
</style>