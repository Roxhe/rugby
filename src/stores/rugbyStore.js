import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRugbyStore = defineStore('rugby', () => {

    const MY_API_KEY = 'a00cbea0289488838e43f04c98772916';
    
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", MY_API_KEY);
    myHeaders.append("x-rapidapi-host", "v1.rugby.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const rugby = ref()

    async function getNameTeam(Country){
        try {
            const response = await fetch("https://v1.rugby.api-sports.io/teams" + '?country=' + Country, requestOptions );
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            rugby.value = await response.json();   // Pour avoir la liste
            console.log(rugby.value);

            rugby.value.results = rugby.results

            for (const rugby of rugby.results) {
                console.log("- ",rugby.Country);
            }

        } catch (error) {
            console.error("Error fetching rugby data:", error.message);
        }
    }


    async function getLeagueTeam(Country){
        try {
            const response = await fetch("https://v1.rugby.api-sports.io/leagues" + '?country=' + Country, requestOptions );
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            rugby.value = await response.json();    //Pour avoir la liste
            console.log(rugby.value);

            rugby.value.results = rugby.results

            for (const rugby of rugby.results) {
                console.log("- ",rugby.Country);
            }

        } catch (error) {
            console.error("Error fetching rugby data:", error.message);
        }
    }


    async function getFirstTeamInLeagueSeason(LeagueId, Season) {
        try {
            const url = `https://v1.rugby.api-sports.io/standings?league=${LeagueId}&season=${Season}`;
            console.log("Fetching URL:", url); // Affiche l'URL dans la console


        } catch (error) {
            console.error("Error fetching first team in league season data:", error.message);
        }
    }

    return { rugby, getNameTeam, getLeagueTeam, getFirstTeamInLeagueSeason }


})