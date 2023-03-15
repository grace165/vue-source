<script setup>
  //demonstrate how a deeply nested child component can retrieve
  //data from an ancestor component using Provide and Inject
  //write a visible description of your demonstration in one of your 
  //templates so that the viewer can understand the demo 

  import { provide } from 'vue'
  import Inject from './components/Inject.vue'

  provide('message', 
  'This message is being provided by the ancestor component. The nested child component is receiving this message using inject. Both provide() and inject() are imported from vue into the app that utilizes them. The components are placed in the templates of the parent apps for nesting, and this message is passed through the parent, component 1, and into component 2 (where it is displayed in template).')
</script>

<template>
  <h1>Provide and Inject Demo </h1>
    <div>
      <Inject></Inject>
    </div>
</template>

<style>
h1{
  text-align: center; 
  font-family: sans-serif;
  color: darkred;
}
html{
  background-image: linear-gradient(to right, pink, lightpink, palevioletred);
}
</style>