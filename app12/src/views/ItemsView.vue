<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import HomeNavBar from '../components/HomeNavBar.vue';
import SearchBar from '../components/SearchBar.vue';
import jsonObject from '../assets/metadata.json'
//import Image from '../components/Image.vue';
//import Catname from '../components/Catname.vue'


//const props = defineProps(['main'])

const route = useRoute()

const catFiles = reactive(jsonObject.cats)



let label = undefined
setLabel()

watch(() => route.params.id, setLabel)

function setLabel() {
    console.log("params changed")
    console.log(route.params)
    let id = route.params.id
    let catName = id ? `${id.charAt(0).toUpperCase()}${id.slice(1)}` : ''
    label = id ? `${route.name} ${catName}` : route.name
}

</script>

<template>
    <nav>
        <HomeNavBar />
        <SearchBar />
    </nav>
    <br>
    <hr>
    <h1> Gremlin is MY Cat </h1>
    <div v-if="$route.params.id">
        <div class="names" v-for="value in catFiles" v-bind=value>
            <div class="left-col">
               {{ value.name }}
                <!--Catname/-->
            </div>
            <div class="right-col">
                <img :src="('../' + value.image)" />
                <!--Image/-->
            </div>
        </div>
    </div>
    <div v-else>
        <div class="names" v-for="value in catFiles" v-bind=value>
            {{ value.name }}
            <br>
        </div>
    </div>
</template>

<style>
.names {
    color: darkorchid;
    font-family: sans-serif;
    font-size: 30px;
    margin: 10px;
    margin-left: 30px;
}
</style>