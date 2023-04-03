<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <RouterLink class="items" to="/items">Items</RouterLink>
    </nav>
</template>

<style>
.items{
    position: absolute;
    right: 0;
}
</style>