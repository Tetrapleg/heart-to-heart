import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 15px;
  height: inherit;
`;

export const ContentContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
);