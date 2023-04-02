<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="container">
    <router-link to="/">Home</router-link>
    <router-link to="create/body">Body</router-link>
    <router-link to="create/wings">Wings</router-link>
    <router-link to="create/other">Other</router-link>
    <router-link to="create/render">Render</router-link>
  </nav>
  <router-view></router-view>
</template>
