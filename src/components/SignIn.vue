<template>
  <div class="card">
    <span>
      <label>login: </label>
      <input v-model="login"/>
    </span>
    <span>
      <label>password: </label>
      <input v-model="password"/>
    </span>
    <div class="buttons">
      <button type="button" @click="register">Register</button>
      <button type="button" @click="signIn">Sign In</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {signInWithEmail} from "../api/auth-api.ts";
import {useRouter} from "vue-router";
import {registerBusiness, registerEmployee} from "../api/registration.ts";

const login = ref("")
const password = ref("")

const router = useRouter()

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

function register() {
  console.log('[REGISTER]')
  // createUser(login.value, password.value)
  if (props.id !== '') {
    registerEmployee(props.id, login.value, password.value)
  } else {
    registerBusiness(login.value, password.value)
  }
}

function signIn() {
  signInWithEmail(login.value, password.value)
      .then((loggedIn) => {
        console.log('[SIGN IN]', loggedIn)
        if (loggedIn) {
          router.push('/private')
        }
      })
}


</script>

<style scoped>
.card{
  display: flex;
  flex-direction: column;
}

.buttons {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
