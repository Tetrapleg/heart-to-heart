import styled from 'styled-components';

const ContentContainer = styled.section`
  text-align: center;
  font-size: 1.5vmax;
  font-weight: 100;
  color: rgb(93,76,96);

  @media(max-width: 1300px) {
    font-size: 2vmax;
  }

  @media(max-width: 1060px) {
    font-size: 2.3vmax;
  }

`;

export const ContentWrapper = ({ children }) => (
  <ContentContainer >
    {children}
  </ContentContainer>
)