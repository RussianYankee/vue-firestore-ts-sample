<template>
  <div class="main-container">
    <div class="navbar">
      <nav class="navbar-links">
        <div class="navbar-link">
          <router-link to="/">Home</router-link>
        </div>
        <div class="navbar-link">
          <router-link to="/login">Sign In</router-link>
        </div>
        <div class="navbar-link">
          <router-link to="/private">Private</router-link>
        </div>
        <div class="navbar-link">
          <router-link to="/docs">Docs</router-link>
        </div>
      </nav>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>


</style>
