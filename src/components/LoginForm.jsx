import { useEffect } from "react"
import { getWeatherInfo } from "../api"
import { useTheme } from "@emotion/react"
import { ActionButton, MainHeading, Text } from "./ContentSections/common"

export const LoginForm = () => {
    const theme = useTheme();

    const makePassword = (username) => {
        let usernameArray = username.split('')
        let newPassword = usernameArray.filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char)).join('')
        console.log(newPassword)
    }
    useEffect(() => {

    }, [])

    return (
        <>
            <MainHeading fontSize='20px'>Volante QuickConnect</MainHeading>
            <Text fontSize='12px' color={theme.colors.gray}>Please login to your platform</Text>
            <ActionButton bgColor={theme.colors.blue} color={theme.colors.white} fontSize="20px">LOGIN</ActionButton>
        </>
    )
}