<script setup>
import { reactive, ref } from 'vue'
import Card from './components/Card.vue'
import Form from './components/Form.vue'

//const user = reactive({
//  name: "",
//  image: ""
//})

const name = ref("")
const image = ref("")

const arr = [];

//array for Form component
const files = reactive([arr]);

function submit(){
  console.log("insert into array")
  //emit('submit')
  arr.push(name) 
  arr.push(image) 
}

</script>

<template>
  <h1>Cat Character Designer</h1>

  <Form v-model:name="name" v-model:image="image" @some-event="submit"></Form>

  <div id="card" v-for="value in files" v-bind=value>
   <Card v-bind="value"> 
    
  </Card>
  </div>


</template>

<style>
html{
  background-color: rgb(172, 244, 247);
}

h1{
  text-align: center;
  font-family: sans-serif;
  color: rgb(255, 187, 199);
  -webkit-text-stroke-color: rgb(255, 97, 150);
  -webkit-text-stroke-width: 2px;
  font-size: 70px;
}

#card{
  background-color: rgb(236, 25, 106);
  color: white;
  width: 800px;
  height: auto;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  align-content: center;
  border-radius: 25px;
  border-color: red;
  border-width: 5px;
}

</style>