<script setup>
//import { inject } from 'vue'
import Inject2 from './Inject2.vue'

</script>

<template>
    <div class="box">
        <h1> Component 1</h1>
    <Inject2></Inject2>
    </div>
</template>

<style>
.box{
    border-radius: 10px;
    border-color: darkred;
    border-width: 3px;
    border-style: solid;
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 700px;
    height: 400px;
    background-image: linear-gradient(to right, pink, lightpink, palevioletred);

}

</style>