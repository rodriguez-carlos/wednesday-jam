import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TextFieldWrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`;

const InputIcon = styled(FontAwesomeIcon)`
    position: absolute;
    left: 10px;
    top: 50%;
    transform : translateY(-50%);
`;

const TextField = styled.input`
    background: ${props => props.bgColor};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    border-radius: 10px;
    border: 0px;
    padding: 0.8rem 2rem;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
`;

const TextInputField = ({bgColor, color, fontSize, icon}) => {
    return (
        <TextFieldWrapper>
            <InputIcon icon={icon} />
            <TextField
                bgColor={bgColor} 
                color={color}
                fontSize={fontSize}
                type='text'
                placeholder="hola"
            />
        </TextFieldWrapper>
    )
};

export default TextInputField;