import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";


const TextField = styled.input`
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    border-radius: 10px;
    border: 0px;
    padding: 0.8rem 10rem;
    display: inline-block;
`;

const TextInputField = () => {
    return (
        <FontAwesomeIcon icon={faUser} />
    )
};

export default TextInputField;