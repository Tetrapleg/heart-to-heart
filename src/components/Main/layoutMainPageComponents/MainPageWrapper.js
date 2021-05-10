import styled from 'styled-components';

const PageWrapper = styled.main`
  width: 100%;
  flex: 1;
  position: relative;
`;

export const MainPageWrapper = ({ children }) => (
  <PageWrapper >
    {children}
  </PageWrapper>
);