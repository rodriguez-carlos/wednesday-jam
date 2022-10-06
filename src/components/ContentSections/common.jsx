import styled from '@emotion/styled';

const Container = styled.article`
    position: relative;
    overflow: hidden;
`;

const Section = styled.section`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 2rem 3rem;

  @media (min-width: 960px) {
    padding: 2rem 8rem;
  }

  @media (min-width: 1240px) {
    padding: 2rem 14rem;
  }
`;

export { Container, Section };