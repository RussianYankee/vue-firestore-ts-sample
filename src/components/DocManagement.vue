<template>
  <div class="card">
    <label>id: </label>
    <input v-model="userId"/>
  </div>
  <div class="card">
    <button type="button" @click="++count">count: {{ count }}</button>
    <button type="button" @click="click">save doc</button>
    <button type="button" @click="deleteUsr">delete doc</button>
    <button type="button" @click="listAll">list all</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {addNewUser, deleteUser} from "../api/user-api.ts";
import {getDocsFromCollection} from "../api/firebase-app.ts";

const count = ref(0)
const userId = ref("")

function click() {
  addNewUser(
      {
        username: `user${count.value}`,
        role: "USER",
        isItMap: {
          newValue: count.value,
          oldValue: `string${count.value}`
        },
        active: true
      }
  )
}

function deleteUsr() {
  deleteUser(userId.value)
}

function listAll() {
  getDocsFromCollection('users')
}
</script>

<style scoped>

</style>
