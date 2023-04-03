<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HomeNavBar from '../components/HomeNavBar.vue';
import SearchBar from '../components/SearchBar.vue';
import jsonObject from '../assets/metadata.json'

//const props = defineProps(['main'])

const catFiles = reactive(jsonObject.cats)

const router = useRouter()

console.log(router.getRoutes())

</script>

<template>
    <nav>
        <HomeNavBar />
        <SearchBar />
    </nav>
    <br>
    <hr>
    <h1> Gremlin is MY GORGEOUS Cat </h1>
    <div class="names" v-for="value in catFiles" v-bind=value>
        <div class="left-col">
            {{ value.name }}
        </div>
        <div class="right-col">
            <img :src="('../../../' + value.image)" />
        </div>
    </div>
</template>

<style>
.names {
    color: darkorchid;
    font-family: sans-serif;
    font-size: 20px;
    margin: 10px;
    margin-left: 30px;
}

.right-col {
    float: left;
    width: 50%;
}

.left-col {
    float: left;
    width: 50%;
    font-size: 30px;
}

img {
    width: 50%;
    height: 50%;

}
</style>