const validatePassword = (username, password) => {
    let usernameArray = username.split('');
    let newPassword = usernameArray.filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char)).join('')
    if (password === newPassword && password.length !== 0) {
        return true
    }
    else {
        return false
    };
}

export default validatePassword;