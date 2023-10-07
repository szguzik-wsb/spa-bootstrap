<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">

      <div>
        <b-nav>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
