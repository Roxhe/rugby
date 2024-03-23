<template>
  <div>
      <input v-model="Country" placeholder="Rechercher un pays">
      <button @click ="rugbyStore.getNameTeam(Country)">Rechercher</button>

    <ul>
      <li v-for = "Country in rugbyStore.rugby?.response">
        {{ Country.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>



import {useRugbyStore} from "@/stores/weatherStore.js"
import {ref} from "vue";

const rugbyStore = useRugbyStore();
const Country = ref()


console.log(rugbyStore.rugby);


</script>
