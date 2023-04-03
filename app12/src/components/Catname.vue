<script setup>
import { reactive } from 'vue'
import jsonObject from '../assets/metadata.json'

const catFiles = reactive(jsonObject.cats)

</script>

<template>
<div class="names" v-bind="value in catFiles">
            <div class="left-col">
                {{ value.name }}
             <!---   {{ $route.params.id.catName }} -->
            </div>
        </div>
</template>