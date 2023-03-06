<script setup>
import { ref, onMounted } from 'vue'
import jsonObject from '../assets/metadata.json'

const audio = ref(null)

const props = defineProps({
    label: String,
    duration: String,
    audioFile: String
})

function getAudioUrl() {
    console.log(props.audioFile)
    return new URL(`../assets/audio/${props.audioFile}`, import.meta.url)
}

onMounted(() => {
   audio.value.src = getAudioUrl()
   console.log(audio.value)
})
</script>

<template>
    <div id="card">
        <span id="playlist">
            <ul>
                <div class="label">
                    {{ label }}
                    <br>
                </div>
                <audio class="audio" ref="audio" controls />
       
                <div class="duration">
                    {{ duration }}
                </div>
            </ul>
        </span>
    </div>
</template>

<style>
#card {
    align-items: center;
    border-radius: 25px;
    border: solid 3px green;
    background-color: rgb(200, 238, 211);
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
}

.label {
    text-align: center;
    font-family: sans-serif;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: none;
}

.audio{
    text-align: center;
    font-family: sans-serif;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: green;
}

.duration {
    text-align: center;
    font-family: sans-serif;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: none;
}
</style>