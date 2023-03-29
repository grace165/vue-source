<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user.js'
import { ref } from 'vue'

const store = useUserStore();
const router = useRouter();

const fName = ref("")
const lName = ref("")
const stAddr = ref("")
const city = ref("")
const state = ref("")
const zipCode = ref("")

function submit() {
    console.log("change made")
        store.firstName = fName.value,
        store.lastName = lName.value,
        store.streetAddr = stAddr.value,
        store.city = city,
        store.state = state,
        store.zipCode = zipCode 
    router.push("/")
}

</script>

<template>
    <h1>Edit</h1>
    <br>
    <input type="text" placeholder="First Name" v-model="fName" />
    <br>
    <input type="text" placeholder="Last Name" v-model="lName" />
    <br>
    <input type="text" placeholder="Street Address" v-model="stAddr" />
    <br>
    <input type="text" placeholder="City" v-model="city" />
    <br>
    <input type="text" placeholder="State" v-model="state" />
    <br>
    <input type="number" placeholder="Zip Code" v-model="zipCode" />
    <br>
    <div class="button">
        <button @click="submit" class="submit" type="button">Submit</button>
    </div>

</template>

<style>
input {
    border-radius: 5px;
}

.submit {
    border-radius: 5px;
    background-color: darkblue;
    color: white;
    border-color: lightblue;
}
</style>
