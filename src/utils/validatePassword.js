const validatePassword = (username, password) => {
    let usernameArray = username.split('');
    let newPassword = usernameArray.filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char)).join('')
    console.log(newPassword);
    if (password === newPassword) console.log('correct password');
    else console.log('wrong password');
}

export default validatePassword;