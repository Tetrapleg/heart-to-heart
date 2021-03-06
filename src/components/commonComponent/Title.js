import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-size: 1.5em;
  font-family: 'Marck Script';
`;

export const Title = ({ children, ...props }) => (
  <TitleWrapper >
    {children}
  </TitleWrapper>
)