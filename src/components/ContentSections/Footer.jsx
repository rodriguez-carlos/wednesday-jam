import styled  from '@emotion/styled';
import { Text } from './common';

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;

`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Text>2022 &#169; Volante Quick Connect, Volante Technologies Inc.</Text>
        </FooterWrapper>
    )
}

export default Footer;