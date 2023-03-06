<script setup>
import { ref, reactive, watch } from 'vue'
import { onMounted, onUpdated } from 'vue'
const usernameRef = ref(null)
const username = ref('')
const password = ref('')
const password2 = ref('')
const email = ref('')
const phonenumber = ref('')
const user = reactive({
  profilepic: {}
})
const disabled = ref(true)
const validUsername = ref(false)
const validPassword = ref(false)
const validEmail = ref(false)
const validPhonenumber = ref(false)
// const validProfilepic = ref(false)
const passwordsMatch = ref(false)
const usernameErrorRef = ref(null)
const passwordErrorRef = ref(null)
const password2ErrorRef = ref(null)
const phonenumberErrorRef = ref(null)
// const profilepicErrorRef = ref(null)

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var lowercase = 'abcdefgh.....xyz';
var uppercase = 'ABCDEFGH.....XYZ';
var special = '§!"#¤%&/()=?@£$€{[]}+.....,<>;:_';

var valid = true;

var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//const emailValidator = reactive('deep-email-validator');

//async function isEmailValid(email) {
//  return emailValidator.validate(email)
//}

// watch element ref - similar to onMounted - not watching value of input
// for some reason disabled when ref function is installed 
let count = 0
watch(usernameRef, () => {
  console.log('watching usernameRef')
  console.log(usernameRef.value)
  console.log(count++)
  usernameRef.value.value = "rmcgregor"
})
// called when anything in component changes - including onMounted
// if used in input element, must have v-model set
function containsValidCharacter(stringToTest, validCharacters) {
  for (var i = 0; i < stringToTest.length; i++) {
    if (validCharacters.indexOf(stringToTest.charAt(i))) {
      return true;
    }
  }
  return false;
}

function componentUpdate(elm) {
  console.log("password changed")
  console.log(elm.value)
  console.log(passwordErrorRef.value)
  if (passwordErrorRef.value != null && elm.value.length > 0) {
    validPassword.value = (elm.value.length >= 8
    //elm.value.pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    //(containsValidCharacter(password, lowercase)), 
    //(containsValidCharacter(password, uppercase)),
    //(containsValidCharacter(password, special))
    )
    passwordErrorRef.value.innerHTML = (validPassword.value) ?
      "&nbsp;" : "Minimum length: 8 characters. Must include 1 uppercase, 1 lowercase, 1 punctuation"
  }
}
//watch v-model input.value ref (called when string changes)
watch(username, () => {
  validUsername.value = (username.value.length >= 4)
  usernameErrorRef.value.innerHTML = (validUsername.value) ?
    "&nbsp;" : "Minimum length: 4 characters"
  usernameRef.value.setAttribute("data", "hello")
})
// watch array of refs
watch([password, password2], () => {
  passwordsMatch.value = (password.value === password2.value)
  password2ErrorRef.value.innerHTML = (passwordsMatch.value || password2.value.length == 0) ?
    "&nbsp;" : "Passwords do not match"
})
//watch email
watch(email, () => {
  validEmail.value = (email)
  //pattern?
  emailErrorRef.value.innerHTML = (isEmailValid = false) ?
    "&nbsp;" : "Not a valid email"
})
//watch phone number 
watch(phonenumber, () => {
  validPhonenumber.value = (phonenumber.value.length == 12)
  phonenumberErrorRef.value.innerHTML = (validPhonenumber.value) ?
    "&nbsp;" : "Not a valid phone number. Enter area code and dashes"
})
// watch array of refs
watch([validUsername, validPassword, passwordsMatch, validEmail, validPhonenumber], async () => {
  disabled.value = !(validUsername.value && validPassword.value && passwordsMatch.value && validEmail.value && validPhonenumber.value)
  console.log(disabled.value)
  if (!disabled.value) {
    usernameRef.value.value = ''
    document.getElementById("button").style.borderColor = "blue"
    document.getElementById("button").style.backgroundColor = "blue"
    document.getElementById("button").style.color = "white"
  }
})
function submit() {
  let mssg = username.value + ", " + password.value
  console.log(mssg)
}
onMounted(() => {
  usernameRef.value.focus();
})
onUpdated(() => {
  //console.log(usernameRef.value.value)
})

function loadPreviewImg(event) {
  user.profilepic = event.target.files[0]
  let reader = new FileReader()
  reader.onloadend = function () {
    let img = document.querySelector("#preview-img")
    img.src = reader.result;
  }
  reader.readAsDataURL(user.profilepic)
}
</script>


<template>
  <div class="container">
    <form class="form">
      <fieldset class="d-flex flex-column">
        <legend>Create Account</legend>

        <div class="form-floating">
          <input ref="usernameRef" v-model="username" id="username" type="text" class="form-control"
            placeholder="Username" />
          <label for="username" class="form-label"></label>
          <small ref="usernameErrorRef" class="text-danger">&nbsp</small>
        </div>

        <div class="form-floating mb-2">
          <input :ref="componentUpdate" v-model="password" id="password" type="password" class="form-control"
            placeholder="Password" pattern="var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/" />
          <label for="password" class="form-label"></label>
          <small ref="passwordErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input v-model="password2" id="password2" type="password" class="form-control" placeholder="Reenter Password" />
          <label for="password2" class="form-label"></label>
          <small ref="password2ErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input v-model="email" id="email" type="email" class="form-control" placeholder="Email Address" />
          <label for="email" class="form-label"></label>
          <small ref="emailErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input v-model="phonenumber" maxlength="12" id="phonenumber" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            class="form-control" placeholder="Phone Number" />
          <label for="phonenumber" class="form-label"></label>
          <small ref="phonenumberErrorRef" class="text-danger">&nbsp;</small>
        </div>
        <br>
        <div class="form-floating" style="align-content: center">
          <label for="profilepic" class="label"> Choose a Profile Pic</label>
          <input id="profilepic" type="file" placeholder="Upload a Profile Pic" accept="image/png, image/jpeg"
            @change="loadPreviewImg" />
          <img id="preview-img">
        </div>

        <div>
          <button @click="submit" class="btn" id="button" type="button" v-bind:disabled="disabled">Create</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style>
#preview-img {
  border-radius: 100px;
  border-width: 10px;
  display: block;
  width: 200px;
  height: 200px;
  align-items: center;
}

.container {
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.form {
  border-radius: 10px;
  border-style: solid;
  border-color: rgb(155, 155, 235);
  border-width: 5px;
  padding: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 300px;
  height: auto;
  font-family: sans-serif;
  align-content: center;
}

.form-floating {
  padding: 12px 12px 12px 12px;
}

.btn {
  border-radius: 5px;
  border-color: blue;
  background-color: rgb(155, 155, 235);
}

.text-danger {
  color: red;
  font-size: small;
  display: block;
}

.label {
  color: gray;
  font-size: medium;
}

input:placeholder-shown {
  padding: 10px;
  background-color: whitesmoke;
  border: 2px solid lightgray;
  height: 30px;
  border-radius: 5px;
}

input:hover {
  outline: 2px solid blue;
}

fieldset {
  border: 0;
}

legend {
  font-size: 30px;
}
</style>
