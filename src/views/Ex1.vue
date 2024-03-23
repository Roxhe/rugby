<template>
  <div>
    <div class="title"><h1>Notre premier { { rendu dynamique } }</h1></div>
    <div class="ex">
      <h1>Hello {{ name }}</h1>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const name = ref('World')

</script>

<style>

</style>
