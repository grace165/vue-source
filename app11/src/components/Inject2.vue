<script setup>
import { inject } from 'vue'

const message = inject('message')

</script>

<template>
    <div class="box2">
        <h1>Component 2</h1>
     {{ message }}
    </div>
</template>

<style>
.box2{
    color: maroon;
    font-family: sans-serif;
    border-radius: 25px;
    border-color: darkred;
    border-width: 3px;
    border-style: solid;
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 600px;
    height: 250px;
    background-image: linear-gradient(to right, pink, lightpink, palevioletred);
}
</style>