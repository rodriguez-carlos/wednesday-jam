import { useEffect, useState } from "react";
import { getWeatherInfo } from "../api";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@emotion/react";
import { ActionButton, MainHeading, Section, Text } from "./ContentSections/common";
import styled from "@emotion/styled";
import TextInputField from "./TextInputField";
import { faUser, faKey, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import validatePassword from '../utils/validatePassword';


const LoginFormSection = styled(Section)`
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
`;

export const LoginForm = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [didWrongInput, setDidWrongInput] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <LoginFormSection>
            <MainHeading fontSize='20px'>Volante QuickConnect</MainHeading>
            <Text 
                fontSize='12px' 
                color={theme.colors.gray}>
                    Please login to your platform
            </Text>
            {didWrongInput ? 
            <Text 
                fontSize='12px' 
                color={theme.colors.red}>
                Wrong username or password. Check again
            </Text> : ''}
            
            <form>
                <label hidden>Username</label>
                <TextInputField 
                    bgColor={theme.colors.lightGray} 
                    iconLeft={faUser} 
                    placeholder='Username'
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label hidden>Password</label>
                <TextInputField 
                    bgColor={theme.colors.lightGray} 
                    iconLeft={faKey}
                    iconRight={faEyeSlash}
                    isPassword
                    placeholder='Password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ActionButton 
                    color={theme.colors.white} 
                    fontSize="20px"
                    onClick={(e) => {
                        const wrongAttempt = !validatePassword(username, password);
                        if (wrongAttempt)
                            setDidWrongInput(true);
                        else {
                            setDidWrongInput(false);
                            navigate('/welcome')
                        }
                        e.preventDefault();
                    }}
                >
                    LOGIN
                </ActionButton>
            </form>
        </LoginFormSection>
    )
}