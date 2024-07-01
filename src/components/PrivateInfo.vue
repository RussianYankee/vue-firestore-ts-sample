<template>
  <div class="private-container">
    <div>
      <h3>You have to be signed in to look at this page</h3>
    </div>
    <button type="button" @click="signOut">Sign Out</button>
  </div>
</template>

<script setup lang="ts">
import {signUserOut} from "../api/auth-api.ts"
import {useRouter} from "vue-router";

const router = useRouter();
function signOut() {
  console.log('[SIGN OUT]')
  signUserOut()
  router.push('/login')
}
</script>

<style scoped>
.private-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  max-width: 200px;
}
</style>
