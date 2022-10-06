import styled from '@emotion/styled';

const Container = styled.article`
    position: relative;
    overflow: hidden;
`;

const Section = styled.section`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: 100%;
`;

const ActionButton = styled.button`
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    border-radius: 10px;
    border: 0px;
    padding: 0.8rem 10rem;
    display: inline-block;
    cursor: pointer;
`;

export { Container, Section, ActionButton };