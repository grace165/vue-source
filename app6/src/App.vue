<script setup>
import { ref, reactive } from 'vue'

const user = reactive({
  namefirst: "",
  namelast: "",
  email: "",
  radio: "",
  select: "",
  quantity: "",
  date: "",
  addr: "",
  addr2: "",
  city: "",
  zip: ""
})

console.log("begin");

function submit() {
  console.log("click")
}

</script>

<template>
  <div class="header">
    <h1>
      <p> Order Form </p>
      <p class="p1"> Please fill in your information and we'll be sending your order in no time. </p>
    </h1>
  </div>

  <form>
    <div class="col1">
      <label>Name <input type="text" v-model="user.namefirst" required="required"
          style="margin-left: 160px; width: 250px" /><input type="text" style="width:250px;" v-model="user.namelast"
          required /></label>
      <br>
      <label>Email <input type="email" v-model="user.email" required style="margin-left: 165px; width:250px;" /></label>
      <br>
      <label>T-shirt model</label>

      <div class="tshirt-container">
        <div class="tshirt">
          <input required type=radio v-model="user.radio" name="radio" value="green" style="margin-left: 210px;">
          <label><img src="/t_shirt_green.jpg"/></label>
        </div>
        <div class="tshirt">
          <input required type=radio v-model="user.radio" name="radio" value="green" style="margin-left: 210px;">
          <label><img src="/t_shirt_yellow.gif" /></label>
        </div>
        <div class="tshirt">
          <input required type=radio v-model="user.radio" name="radio" value="green" style="margin-left: 210px;">
          <label><img src="/t_shirt_blue.png" /></label>
        </div>
      </div>

      <div>
        <label for="sizeChoices"> Size </label>
        <select id="sizeChoices" v-model="user.select"
          style="margin-left: 173px; width:250px; height: 25px; border-color: lightgray; border-radius: 5px;" required>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <label>Quantity <input type="number" style="margin-left: 145px; width: 245px;"
          v-on:input="event => user.quantity = event.target.value" required /></label>
      <br>
      <label>Delivery Date <input type=date v-on:input="event => user.date = event.target.value"
          style="height: 25px; width:250px; margin-left:105px" required /></label>

      <div class="gray">
        <label>Delivery Address <input type=text v-model="user.addr" placeholder="Street Address" required
            style="margin-left: 75px; width: 600px; height: 20px; margin-bottom: -30px; border-color:lightgray;" />
          <br> <input type=text v-model="user.addr2" placeholder="Street Address Line 2"
            style="margin-left: 200px; width: 600px; height: 20px; margin-bottom: -30px; border-color:lightgray;" /></label>
        <br> <input type=text v-model="user.city" placeholder="City" required
          style="margin-left: 200px; width: 250px; height: 20px; margin-bottom: -30px; border-color:lightgray;" />
        <br> <input type=text v-model="user.zip" placeholder="Postal/Zip Code" required
          style="margin-left: 200px; width: 250px; height: 20px; margin-bottom:-30px; border-color:lightgray;" />
      </div>
    </div>
  <div class="button-container">
    <button type="submit" @click="submit" class="button"> Purchase </button>
  </div>
</form>


  <div>
    <p>Information</p>
    <span> Name: {{ user.namefirst }} {{ user.namelast }}</span>
    <br>
    <span> Email: {{ user.email }} </span>
    <br>
    <span> T-shirt Model: {{ user.radio }}</span>
    <br>
    <span> Size: {{ user.select }}</span>
    <br>
    <span> Quantity: {{ user.quantity }} </span>
    <br>
    <span> Delivery Date: {{ user.date }}</span>
    <br>
    <span> Street 1: {{ user.addr }}</span>
    <br>
    <span> Street 2: {{ user.addr2 }}</span>
    <br>
    <span> City: {{ user.city }}</span>
    <br>
    <span> Zip: {{ user.zip }} </span>

  </div>

</template>

<style>
form {
  margin: 20px;
  border-color: black;
  border-width: 5px;
}

.header {
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background-color: rgb(56, 199, 51);
  margin: 20px;
  color: white;
  padding-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
}

.button {
  background-color: rgb(56, 199, 51);
  color: white;
  font-family: sans-serif;
  
  border-color: rgb(56, 199, 51);
  border-radius: 5px;
  width: 100px;
  height: 40px;
}

.gray {
  background-color: rgb(238, 238, 238);
  padding: 5px;
  border-radius: 2px;
}

p {
  font-size: larger;
  font-family: sans-serif;
  margin-left: 50px;
  margin-bottom: -5px;
  padding: 20px;
}

.p1 {
  font-size: medium;
  font-family: sans-serif;
  margin-left: 75px;
}

.tshirt-container {
  display: inline-block;
}

.tshirt {
  display: inline-block;
  padding: -10px;
  margin: 0px;

}

img {
  width: 100px;
  height: 100px;
  margin: -10px;
  padding: -10px;
  
}

label {
  font-family: sans-serif;
}

input {
  margin: 15px;
  font-family: sans-serif;
  border-color: lightgray;
  border-radius: 5px;
  border-style: solid;
  height: 20px;
}

.col1 {
  column-count: 1;
  column-gap: 100px;
  margin: 20px;
}

.col2 {
  column-count: 2;
  column-gap: 0px;
  align-content: center;
  margin: 20px;
}
</style>