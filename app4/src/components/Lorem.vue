<script setup>

import { ref }  from 'vue'

const paragraph = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu turpis. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Nisi lacus sed viverra tellus in hac habitasse. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Eget aliquet nibh praesent tristique magna sit amet purus. Hendrerit gravida rutrum quisque non tellus orci ac. Vestibulum lectus mauris ultrices eros in cursus turpis. Felis imperdiet proin fermentum leo vel. Sit amet est placerat in. Est placerat in egestas erat imperdiet. Sed viverra tellus in hac. Duis ultricies lacus sed turpis tincidunt id. Tortor consequat id porta nibh venenatis. Nullam non nisi est sit amet facilisis magna. Felis bibendum ut tristique et egestas quis. Nulla aliquet enim tortor at auctor urna nunc id. Tortor dignissim convallis aenean et tortor. Consectetur purus ut faucibus pulvinar.");

const paragraph2 = ref("Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Duis ultricies lacus sed turpis tincidunt id. Mattis enim ut tellus elementum. Volutpat consequat mauris nunc congue nisi vitae. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Consectetur a erat nam at lectus urna. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Arcu cursus euismod quis viverra nibh cras. In hendrerit gravida rutrum quisque non tellus orci. Ornare arcu dui vivamus arcu felis bibendum.");

const paragraph3 = ref("Malesuada nunc vel risus commodo viverra maecenas accumsan. Sed egestas egestas fringilla phasellus faucibus. Tortor vitae purus faucibus ornare suspendisse. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Tristique senectus et netus et malesuada fames ac turpis. Dapibus ultrices in iaculis nunc sed augue. Interdum varius sit amet mattis vulputate enim nulla aliquet. Enim nec dui nunc mattis enim ut tellus. Pellentesque massa placerat duis ultricies lacus. Suscipit tellus mauris a diam maecenas sed enim. Bibendum neque egestas congue quisque. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Bibendum neque egestas congue quisque. Arcu vitae elementum curabitur vitae nunc. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Id ornare arcu odio ut sem. Hendrerit dolor magna eget est lorem ipsum.");

const textColor = ref("black")
const textSize = ref("x-large")
const backgroundColor = ref("rgb")
const fontFamily = ref("normal")

function changeAttr(){
    textColor.value = (textColor.value == 'black') ? "blue" : "black"; 
    textSize.value = (textSize.value == 'x-large') ? "xx-large" : "x-large"; 
    backgroundColor.value = (backgroundColor.value == 'rgb') ? "green" : "rgb"
    fontFamily.value = (fontFamily.value == 'normal') ? "cursive" : "normal";
}

</script>

<template>
  <div id="Lorem">
    <button @click="changeAttr"> Press Me! </button>
     <span :class="textSize">
        <span :class="textColor">
         <span :class="backgroundColor">
            <span :class="fontFamily">
               {{ paragraph }} 
             <br>
               {{ paragraph2 }}
              <br>
                 {{ paragraph3 }}
                </span>
            </span>
        </span>
    </span>
</div>

</template>
  
<style>
  #Lorem {
    aspect-ratio: 1 / 1;
    background-color: rgb(22, 22, 82);
    border-radius: 200px;
    font-size: x-large;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
  }
  #Lorem:hover{
      background-image: linear-gradient(to right, pink, magenta, orange);
    }
  template{
      justify-content: center;
      position: flex;
  }

  .blue{
    color: blue;
  }
  .black{
    color: black;
  }
  .x-large{
    font-size: x-large;
  }
  .xx-large{
    font-size: 150px;
  }
  .rgb{
    background-color: none;
  }
  .green{
    background-image: linear-gradient(to right, yellow, green, cyan);
  }
  .normal{
    font-family: sans-serif;
  }
  .cursive{
    font-family:'Courier New', Courier, monospace;
  }
  button{
    width: 100px;
    height: 50px;
    background-color: lightblue;
    border-radius: 25px;
    border-color: blue;
    font-size: large;
  }

  </style>