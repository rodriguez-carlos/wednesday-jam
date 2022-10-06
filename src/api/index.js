import axios from "axios"

const ApiClient = axios.create({
    baseURL: 'https://api.weather.gov/points'
})

export async function getGridInfo(lat, lon) {
    const response = await ApiClient.get(`${lat},${lon}`)
    return response.data
}

export async function getWeatherInfo(grid) {
    const response = await ApiClient.get()
}