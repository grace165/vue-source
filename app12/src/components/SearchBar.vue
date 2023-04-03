<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import jsonObject from '../assets/metadata.json'
import routes from '../router/events.js'

const catFiles = jsonObject.cats
const catName = ref(jsonObject.cats.name)
const input = ref("")
const router = useRouter()

const searched = reactive({
    name: "",
    image: ""
})

function search() {

    console.log("input:", input)
    console.log("catName:", catName)
   // if (input != '') {
       if (input == catName) {
            console.log("item exists")
            searched.name = jsonObject.cats.name
            searched.image = jsonObject.cats.image

            router.push("/items/:id")
            console.log("input:", input)

        }
 //   }
   else {
       console.log("not valid address")
        router.push("/invalid")
    }
 router.replace("/items/:id")

}
</script>

<template>
    <nav>
        <input v-model="input" class="input" type="text" placeholder="Search">
        <button @click="search" class="input" type="button">Search</button>
    </nav>
</template>

<style>
.input {
    position: absolute;
    right: 0;
    background-color: rgb(250, 216, 227);
    border-color: darkmagenta;
    border-radius: 5px;
}
</style>