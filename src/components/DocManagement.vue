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
  </div>
  <div class="invitation-container">
    <button type="button" @click="++count">count: {{ count }}</button>
    <button type="button" @click="generateInvite">generate invite</button>
    <button type="button" @click="listAllInvitations">list invites</button>
  </div>
  <div class="doc-list">
    <div class="doc-list__item"
         v-for="(item, index) in list" :key="index"
    >
      item: {{ item.data() }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {addNewUser, deleteUser} from "../api/user-api.ts";
import {getDocsFromCollection} from "../api/firebase-app.ts";
import {DocumentData, QueryDocumentSnapshot} from "firebase/firestore/lite";
import {addNewInvitation} from "../api/invitation-api.ts";

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

function generateInvite() {
  addNewInvitation({
    role: "technician",
    companyId: "HL3jY6LuNnOKA2INRjyS"
  })
}

function listAllInvitations() {
  getDocsFromCollection('invitations')
      .then(snapshot => list.value = snapshot.docs)
}
</script>

<style scoped>
.invitation-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
