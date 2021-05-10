import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-size: 1.5em;
  padding-bottom: 1em;
  font-family: 'Marck Script';
`;

export const FooterTitle = ({ children, ...props }) => (
  <TitleWrapper >
    {children}
  </TitleWrapper>
)