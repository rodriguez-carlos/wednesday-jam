import { useEffect } from "react"
import { getWeatherInfo } from "../api"

export const LoginForm = () => {

    const makePassword = (username) => {
        let usernameArray = username.split('')
        let newPassword = usernameArray.filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char)).join('')
        console.log(newPassword)
    }
    useEffect(() => {
        (async () => {
            const data = await getWeatherInfo(39.7456, -97.0892)
            console.log(data)
        })()
    }, [])

    return (
        <>
            <h1>login form</h1>
        </>
    )
}