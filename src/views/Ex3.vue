<template>
  <div>
    <div class="title"><h1>La Gestion des evenements</h1></div>
    <div class="ex">
      <h1></h1>
      <button @click="increment">Compteur à: {{ count }}</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const count = ref(0)

function increment(){
  count.value++
}
</script>

<style>

</style>
