import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-size: 1.5em;
  margin-top: 1em;
  font-family: 'Marck Script';
  word-wrap: break-word;
`;

export const HeaderTitle = ({ children, ...props }) => (
  <TitleWrapper >
    {children}
  </TitleWrapper>
)