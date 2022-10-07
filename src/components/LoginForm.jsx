import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@emotion/react";
import { ActionButton, MainHeading, Section, Text } from "./ContentSections/common";
import Footer from "./ContentSections/Footer";
import styled from "@emotion/styled";
import TextInputField from "./TextInputField";
import { faUser, faKey, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import validatePassword from '../utils/validatePassword';
import { getWeatherInfo } from "../api/index";


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
    const [didWrongInput, setDidWrongInput] = useState(false);

    return (
        <LoginFormSection className="login-form-section">
            <MainHeading 
                fontSize='25px'
                marginBot='5px'>
                    Volante QuickConnect
            </MainHeading>
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
                    width='100%'
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
                <Text fontSize='12px' color={theme.colors.gray}>Forgot your password?</Text>
            </form>
            <Footer />
        </LoginFormSection>
    )
}