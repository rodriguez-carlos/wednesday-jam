import styled from '@emotion/styled';

const Container = styled.article`
    position: relative;
    overflow: hidden;
`;

const Section = styled.section`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`;

const ActionButton = styled.button`
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    border-radius: 10px;
    border: 0px;
    margin: 5px 0;
    padding: 0.8rem 2rem;
    width: 100%;
    display: inline-block;
    cursor: pointer;
`;

const MainHeading = styled.h1`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-family: 'Calibri';
    margin-bottom: ${props => props.marginBot};
`;

const Text = styled.p`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-family: 'Calibri';
`;

export { Container, Section, ActionButton, MainHeading, Text };