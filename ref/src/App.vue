<script setup>
  import { ref } from 'vue'

  const title = ref("Ref Demo HW")
  const count = ref(1) 
  console.log(count.value)

  title.value = "your mom"

  const addr = ref({
    street: "420 Big Mama Ln",
    city: "Oogeldy Boogeldy",
    state: "ME"
  })

  const name = {
    first: ref("Joe"),
    last: ref("Mama")
  }

  function increment(){
      count.value++
  }

  function changeAll(){
    addr.value = {
      street: "69 Your Mom St",
      city: "Spookane",
      state: "VA"
     }
  }
  function changeState(){
     addr.value.state = "MN"
   }

   function toggleName(){
    name.first.value = (name.first.value === "Joe") ? "Your" : "Joe"
   }

</script>

<template>
    <h1> {{ title }}</h1>

    <p>
      {{ addr.street }} {{ addr.city }}, {{ addr.state }}
    </p>

    <p>
      {{ name.first.value }}, {{ name.last.value }}
    </p>

    <button @click="increment"> Press Me Pls </button> {{ count }}

    <br>

    <button @click="changeAll"> Change all </button>

    <br>

    <button @click="changeState"> Change State </button> 

    <br>

    <button class="btn btn-primary" @click="toggleName"> Toggle Name</button>

 </template>

<style>
  h1{
    text-align: center;
    color: green;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    align-content: center;
    font-size: 80px;
  }

  p{
    background-color: lightgreen;
    border-radius: 25px;
    width: 600px;
    font-size: xx-large;
  }
  button{
    background-color: lightpink;
    border-radius: 25px;
    border-color: magenta;
    font-size: large;
  }
</style>