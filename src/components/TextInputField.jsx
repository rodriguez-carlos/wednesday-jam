import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

const TextFieldWrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`;

const InputIconLeft = styled(FontAwesomeIcon)`
    position: absolute;
    left: 10px;
    top: 50%;
    transform : translateY(-50%);
`;

const InputIconRight = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
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
    margin: 10px 0;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
`;

const TextInputField = ({iconLeft, iconRight, isPassword, ...props}) => {
    const [passType, setPassType] = useState('password')

    const togglePasswordVisibility = () => {
        if(passType === 'password') setPassType('text')
        else setPassType('password')
    }
    return (
        <TextFieldWrapper>
            <InputIconLeft icon={iconLeft} />
            <TextField
                type={isPassword ? passType : 'text'}
                {...props} 
            />
            {iconRight ? 
                <InputIconRight 
                    icon={iconRight} 
                    onClick={togglePasswordVisibility}
            /> : ''}
        </TextFieldWrapper>
    )
};

export default TextInputField;