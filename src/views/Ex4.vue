<template>
  <div>
    <div class="title"><h1>Les formulaires et la liaison bidirectionelle</h1></div>
    <div class="ex">
      <!-- Astuce 🤫: ici c'est une liaison bidirectionelle... -->
      <input v-model="nom" placeholder="Tapez votre nom ici">
      <h1 class="m-10">Hello {{ nom }}</h1>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const nom = ref("")

</script>

<style>
.m-10 {
  margin-left: 100px;
}
</style>
