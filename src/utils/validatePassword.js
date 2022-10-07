const validatePassword = (username, password) => {
    let usernameArray = username.split('');
    let newPassword = usernameArray.filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char)).join('')
    if (password === newPassword) {
        console.log('correct password')
        return true
    }
    else {
        console.log('wrong password')
        return false
    };
}

export default validatePassword;