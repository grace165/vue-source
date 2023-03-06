<script setup>
//import { createClient } from 'pexels'
import { reactive } from 'vue'
import { watch } from 'vue'
//import { onMounted } from 'vue'

//const client = createClient('1tWSsEsnumWn7U25PjUGtl11pg8MCLdEg2yVVCTNWLBrNQRJSN9dyIoI')

const collection = reactive({
    media: {},
})

const photo1 = reactive({
    title: "Train 1",
    photographers: "Tangent Studios",
    photographer_url: "https://www.pexels.com/@tangentstudiosphotography/",
    url: "https://www.pexels.com/photo/a-train-on-the-railroad-14259027/",
    downloadurl: "train_1.jpg"
})

const photo2 = reactive({
    title: "Train 2",
    photographers: "Joe L",
    photographer_url: "https://www.pexels.com/@bluerhinomedia/",
    url: "https://www.pexels.com/photo/grayscale-photo-of-a-steam-train-5945345/",
    downloadurl: "train_2.jpg"
})

const photo3 = reactive({
    title: "Train 3",
    photographers: "pixaby",
    photographer_url: "https://www.pexels.com/@pixabay/",
    url: "https://www.pexels.com/photo/accident-disaster-steam-locomotive-train-wreck-73821/",
    downloadurl: "train_3.jpg"
})

const photoset = [ photo1, photo2, photo3 ];

const photo = reactive({
    title: "",
    photographers: "",
    photographer_url: "",
    url: "",
    downloadurl: ""
})

/*
async function getCollection() {
    // get the meta-data for all collections
    let result = await client.collections.all({ per_page: 1 })

    // get the id of first collection
    const id = result.collections[0].id

    // get media for the collection
    result = await client.collections.media({ id, type: 'photos', per_page: 6 })

    // cache the media meta-data
    collection.media = result.media
}
*/
let index = 0;

//for (let i = 0; i < 3; i++) {
//    index = photo[i];
//}

async function loadImage() {

    photo.title = photoset[index].title
    photo.photographers = photoset[index].photographers
    photo.photographer_url = photoset[index].photographer_url
    photo.downloadurl = photoset[index].downloadurl
}

watch(collection, () => {
    console.log("collection changed")

    if (photoset.media.length > 0) {
        loadImage()
    }
})

/*
onMounted(() => {
    console.log("onmounted")
    getCollection()
})
*/

function previous() {
    console.log("clicked 'Previous'")
    if (index > 0) {
        index--;
        loadImage();
        document.querySelector('#nextButton').disabled = false;
    }
    if (index == 0){
        document.querySelector('#previousButton').disabled = true;
    }
}

function next() {
    console.log("clicked 'Next'")
    if (index < 2) {
        index++;
        loadImage();
        document.querySelector('#previousButton').disabled = false;
    }
    if(index == 2) {
        document.querySelector('#nextButton').disabled = true;
    }
}

loadImage();
</script>

<template>

    <img :src="photo.downloadurl">
    <a> {{ photo.title }} </a>
    <br>
    <a :href="photo.photographer_url" target="_blank"> {{ photo.photographers }} </a>
    

    <button type="button" @click="previous" id="previousButton" class="button"> &#x2190 Previous </button>
    <button type="button" @click="next" id="nextButton" class="button"> Next &#x2192 </button>

</template>

<style>
button {
    height: 60px;
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-size: 50px;
    border-radius: 10px;
    border-color: lightblue;
    background-color: rgb(139, 24, 24);
}

img{
    height: 400px;
    width: 500px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;
    display: block;
    border-style: solid;
    border-color: darkred;
    border-width: 10px;
    border-radius: 25px;
    background-color: rgb(121, 182, 202); 

}

a{
    font-size: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    align-items: center;
    justify-items: center;
}

html{
    background-color: lightblue;
}

</style>
