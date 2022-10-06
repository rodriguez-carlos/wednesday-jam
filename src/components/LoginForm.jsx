import { useEffect } from "react"

export const LoginForm = () => {

    const makePassword = (username) => {
        let usernameArray = username.split('')
        let passwordArray = []
        usernameArray.forEach(char => {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                return null
            } else {
                passwordArray.push(char)
            }
        })
        console.log(passwordArray)
        let newPassword = passwordArray.join('')
        console.log(newPassword)
    }
    useEffect(() => {
        makePassword('hola')
    }, [])

    return (
        <>
            <h1>login form</h1>
        </>
    )
}