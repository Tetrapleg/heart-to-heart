import styled from 'styled-components';

const ContentBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const ContentWrapper = ({ children, ...props }) => (
  <ContentBodyWrapper>
    {children}
  </ContentBodyWrapper>
);