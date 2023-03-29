<script setup> 
import { RouterView } from 'vue-router'
import EditNav from './components/EditNav.vue'

</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <EditNav/>
    </nav>

    <main>
        
    <RouterView/>
</main>

</template>

<style>
html{
    background-color: lightblue;
    margin: auto;
    padding: auto;
}

</style>