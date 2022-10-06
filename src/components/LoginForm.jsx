import { useEffect } from "react"
import { getWeatherInfo } from "../api"
import { ActionButton } from "./ContentSections/common"

export const LoginForm = () => {

    const makePassword = (username) => {
        let usernameArray = username.split('')
        let newPassword = usernameArray.filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char)).join('')
        console.log(newPassword)
    }
    useEffect(() => {

    }, [])

    return (
        <>
            <h1>Volante QuickConnect</h1>
            <ActionButton bgColor='#143A78' color='#D3F3FE' fontSize="20px">LOGIN</ActionButton>
        </>
    )
}