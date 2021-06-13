import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-size: 1.5em;
  font-family: 'Marck Script';
  color: rgba(255,21,49,0.8);
`;

export const ErrorTitleWrapper = ({ children }) => (
  <>
    <TitleWrapper >
      {children}
    </TitleWrapper>
  </>
)