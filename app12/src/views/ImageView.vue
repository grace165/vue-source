<script setup>
import jsonObject from '../assets/metadata.json'
import { reactive } from 'vue'

const catFiles = reactive(jsonObject.cats)


</script>

<template>
    <div class="names" v-for="value in catFiles" v-bind=value>
        <div class="right-col">
            <img :src="('../../../' + value.image)" />
            <!--   <img :src="('../../../' + $route.params.id.image)" /-->
        </div>
    </div>
</template>