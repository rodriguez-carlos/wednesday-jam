import styled from "@emotion/styled";
import { Container, Section } from "../components/ContentSections/common";
import { LoginForm } from "../components/LoginForm";
import volanteArt from '../assets/volanteBanner.jpg'

const LoginLayout = styled(Container)`
    display: flex;
    flex-direction: column;

    @media (min-width: 960px) {
        flex-direction: row;
  }
`;

const Login = () => {
    return (
        <LoginLayout>
            <Section>
                <img src={volanteArt} alt="" />
            </Section>
            <Section>
                <LoginForm />
            </Section>
        </LoginLayout>
    );
};

export default Login;