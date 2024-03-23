<template>
  <div>
    <div class="title"><h1>Le binding et liaison dynamique</h1></div>
    <div class="ex">
      <h1 :class="titleClass">Passez moi en rouge</h1> <!-- ajoutez la liaison de la classe dynamique ici -->
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const titleClass = ref('titre');

</script>

<style>
.titre {
  color: red;
}
</style>
