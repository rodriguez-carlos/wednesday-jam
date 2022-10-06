import { useEffect } from "react"

export const LoginForm = () => {

    const makePassword = (username) => {
        let usernameArray = username.split('')
        let newPassword = usernameArray.filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char)).join('')
        console.log(newPassword)
    }
    useEffect(() => {
        makePassword('prueba')
    }, [])

    return (
        <>
            <h1>login form</h1>
        </>
    )
}