import axios from "axios"

const ApiPointsClient = axios.create({
    baseURL: 'https://api.weather.gov/points'
})

const ApiGridPointsClient = axios.create({
    baseURL: 'https://api.weather.gov/gridpoints'
})

export async function getTemperatureInfo(lat, lon) {
    const response = await ApiPointsClient.get(`${lat},${lon}`);
    const gridId = response.data.properties.gridId;
    const gridX = response.data.properties.gridX;
    const gridY = response.data.properties.gridY;

    const forecast = await ApiGridPointsClient.get(`${gridId}/${gridX},${gridY}/forecast`)
    return forecast.data.properties.periods[0].temperature;
}


