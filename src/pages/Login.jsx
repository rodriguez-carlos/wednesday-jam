import styled from "@emotion/styled";
import { Container, Section } from "../components/ContentSections/common";
import { LoginForm } from "../components/LoginForm";
import volanteArt from '../assets/volanteBanner.jpg'

const LoginLayout = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;

const VolanteBanner = styled(Section)`
    padding: 0;
    @media (min-width: 1200px) {
        width: 50%;
    }

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