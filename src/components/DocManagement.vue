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
import {DocumentData, QueryDocumentSnapshot} from "firebase/firestore/lite";

const count = ref(0)
const userId = ref("")
const list = ref([] as QueryDocumentSnapshot<DocumentData, DocumentData>[])

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
      .then(snapshot => list.value = snapshot.docs)
}
</script>

<style scoped>

</style>
