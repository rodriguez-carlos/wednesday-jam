import { useEffect } from "react"
import { getWeatherInfo } from "../api"
import { useTheme } from "@emotion/react"
import { ActionButton, MainHeading, Section, Text } from "./ContentSections/common"
import styled from "@emotion/styled"
import TextInputField from "./TextInputField"
import { faUser, faKey, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


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

    useEffect(() => {
        
    }, [])

    return (
        <LoginFormSection>
            <MainHeading fontSize='20px'>Volante QuickConnect</MainHeading>
            <Text fontSize='12px' color={theme.colors.gray}>Please login to your platform</Text>
            <form>
                <label hidden>Username</label>
                <TextInputField 
                    bgColor={theme.colors.lightGray} 
                    iconLeft={faUser} 
                    placeholder='Username'
                />
                <label hidden>Password</label>
                <TextInputField 
                    bgColor={theme.colors.lightGray} 
                    iconLeft={faKey}
                    iconRight={faEyeSlash}
                    isPassword
                    placeholder='Password'/>
                <ActionButton 
                    color={theme.colors.white} 
                    fontSize="20px"
                >
                    LOGIN
                </ActionButton>
            </form>
        </LoginFormSection>
    )
}