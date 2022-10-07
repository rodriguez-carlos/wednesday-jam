import styled from "@emotion/styled";
import { Container, Section } from "../components/ContentSections/common";
import { LoginForm } from "../components/LoginForm";
import volanteArt from '../assets/volanteBanner.jpg'

const LoginLayout = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const VolanteBanner = styled(Section)`
  width: 50%;
`;

const Login = () => {
    return (
        <LoginLayout>
            <VolanteBanner>
                <img src={volanteArt} alt="" />
            </VolanteBanner>
            <LoginForm />
        </LoginLayout>
    );
};

export default Login;