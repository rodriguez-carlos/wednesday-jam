const togglePasswordVisibility = () => {
    let input = this;
    if (input.type === 'password') {
        input.type = 'text'
    } else {
        input.type = 'password'
    }
}

export default togglePasswordVisibility;