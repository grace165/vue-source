<script setup>

const props = defineProps({
    name: String,
    image: String
})


const emit = defineEmits(['submit', 'taco', 'someEvent'])

function submit() {
    console.log("click")
    emit('someEvent')
    //$emit('submit')"    in button in template?
}

function loadPreviewImg(event) {
    let image = event.target.files[0]
    let reader = new FileReader()
    reader.onloadend = function () {
        let img = document.querySelector("#preview-img")
        img.src = reader.result;
    }
    reader.readAsDataURL(image)
}

</script>

<template>
    <form>
        <div class="form">
            <h2>Name Your Cat!</h2>
            <input type="text" id="catname" placeholder="cat name" >

            <h2>Upload an Image of Your Cat!</h2>
            <div style="align-content: center">
                <input id="image" type="file"
                    accept="image/png, image/jpeg" @change="loadPreviewImg"/>
                <br>
                <img id="preview-img">
                <br>
            </div>

            <div>
                <!--button @click="submit" class="btn" id="button" type="button"> Add to Roster </button-->
                <button @click="submit" class="btn" id="button" type="button"> Add to Roster </button>
            </div>
        </div>
    </form>
</template>

<style>
h2 {
    color: rgb(250, 43, 139);
    font-family: sans-serif;
    text-align: center;
}

input {
    margin-right: auto;
    margin-left: auto;
    display: block;
}

.btn {
    background-color: pink;
    border-color: palevioletred;
    border-radius: 5px;
    margin-right: auto;
    margin-left: auto;
    display: block;
}

#preview-img {
    width: 100px;
    height: 100px;
    display: block;
    margin-right: auto;
    margin-left: auto;

}
</style>