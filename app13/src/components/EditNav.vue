<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function edit(){
    console.log("enter edit view")
    router.replace("/edit")
}

</script>

<template>

    <div class="button">
        <button @click="edit" class="edit" type="button">Edit</button>
    </div>

</template>

<style>
.edit{
    background-color: darkblue;
    position: absolute;
    right: 0;
    color: white;
    border-radius: 10px;
    width: 60px;
    border-color: lightblue;
}

</style>