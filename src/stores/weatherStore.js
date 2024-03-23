import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {

    const MY_API_KEY = 'e3d3162326834767aa8213601242202';
    const CURRENT_URL = `https://api.weatherapi.com/v1/current.json?key=${MY_API_KEY}&q=Lyon`;

    const weather = ref({
        location: {},
        current: {}
    })

    async function getCurrentWeather(){
        try {
            const response = await fetch(CURRENT_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            weather.value = await response.json();
            console.log(weather.value);
        } catch (error) {
            console.error("Error fetching weather data:", error.message);
        }
    }

    return { weather, getCurrentWeather }
})
