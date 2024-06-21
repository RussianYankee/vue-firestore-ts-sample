<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <label>id: </label>
    <input v-model="userId"/>
  </div>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="click">save doc</button>
    <button type="button" @click="deleteUsr">delete doc</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {addNewUser, deleteUser} from "../api/user-api"

defineProps<{ msg: string }>()

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
        active:true
      }
  )
}

function deleteUsr() {
  deleteUser(userId.value)
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
