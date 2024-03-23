<template>
  <div class="title"><h1>🏉 Rugby Progress 🏉</h1></div>
  <div class="Box-recherche">
      <button class="buttonleft" @click ="rugbyStore.getNameTeam(Country)">Recherche Équipes</button>
      <input v-model="Country" placeholder="Rechercher un pays">
      <button class="buttonright" @click="rugbyStore.getLeagueTeam(Country)">Rechercher Ligues</button>
      <input v-model="LeagueId" placeholder="ID de la ligue">
      <input v-model="Season" placeholder="Saison (année)">
      <button class="buttonmiddle" @click="rugbyStore.getFirstTeamInLeagueSeason(LeagueId, Season)">Première Équipe</button>
      

  <ul>
    <li v-for = "Country in rugbyStore.rugby?.response">
      {{ Country.name }}
    </li>
    <li v-for = "Leagues in rugbyStore.rugby?.response">
      {{ Leagues.name }}
    </li>
  </ul>
  </div>

</template>
    
<script setup>
import { useRugbyStore } from "@/stores/rugbyStore"; 
import { ref } from "vue";

const rugbyStore = useRugbyStore();
const Country = ref('');
const LeagueId = ref('');
const Season = ref('');

</script> 
   
<style>
.buttonleft{
  color: white;
text-align: center;
background-color: black;
cursor:pointer;

}

.buttonright{
  color: white;
  background-color: black;
text-align: center;
cursor: pointer;

}

.title {
  color: black;
  font-family:fantasy;
  font-size:larger;
  text-align: center;
}

.Box-recherche {
  padding-left: 150px;
}

.buttonmiddle {
  color: white;
  background-color: black;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
}

</style>
