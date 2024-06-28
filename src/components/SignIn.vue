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
import {createUser, signInWithEmail} from "../api/auth-api.ts";
import {useRouter} from "vue-router";

const login = ref("")
const password = ref("")

const router = useRouter()

function register() {
  console.log('[REGISTER]')
  createUser(login.value, password.value)
}

function signIn() {
  console.log('[SIGN IN]')
  if (signInWithEmail(login.value, password.value)) {
    router.push('/private')
  }
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
