<script setup>
import { ref } from 'vue'

const image = ref("")
const name = ref("") 

const props = defineProps({
    name: String,
    image: String
})

const catname = ref(props.name)
const catimage = ref(props.image)

</script>

<template>
    <div id="card">
        <div id="name">
            {{ catname }}
        </div>
        <br>
        <div id="image">
            {{ catimage }}
        </div>
    </div>
</template>

<style>
#card {
    background-color: pink;
    border-color: rgb(255, 233, 237);
    border-width: 3px;
}

#name{
    color: palevioletred;
    font-size: 50px;
}

#image{
    border-color: palevioletred;
    border-width: 10px;
}
</style>