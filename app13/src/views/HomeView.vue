<script setup>
import { useUserStore } from '../stores/user.js'

const store = useUserStore();

</script>

<template>
    <h1> Home </h1>
    <hr>
    <main>
      <div>
        <h2>First Name</h2>
         <p>{{ store.firstName }}</p>
         <h2>Last Name</h2>
         <p>{{ store.lastName }}</p>
         <h2>Street Address</h2>
         <p>{{ store.streetAddr }}</p>
         <h2>City</h2>
         <p>{{ store.city }}</p>
         <h2>State</h2>
         <p>{{ store.state }}</p>
         <h2>Zip Code</h2>
         <p>{{ store.zipCode }}</p>
         <br>
      </div>
    </main>
</template>

<style>
h1{
  color: black;
  font-family: sans-serif;
  font-size: xx-large;
}

h2{
  font-size: 25px;
  font-family: sans-serif;
  color: black;
  text-align: left;
  align-items: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

p {
  text-align: left;
  align-items: center;
  display: block;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  color: darkblue;
  font-family: sans-serif;
  font-size: large;
}

.box{
  border-style:dashed;
  border-radius: 20px;
  border-width: 20px;
  border-color:crimson;
}

.box:hover{
  border-color: red;
}

body{
  position: relative;
  margin: 5%;
}

hr{
  height: 2px;
  background-color: blue;
}
</style>
