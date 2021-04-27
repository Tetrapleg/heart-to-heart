import React from 'react';
import styled from 'styled-components';

const ContainerFluid = styled.div`
  width: 100%;
  height: fit-content;
  position: ${({props}) => props.position};
  z-index: ${({props}) => props.zIndex};
`;

export const FluidContainer = ({ children, ...props }) => (
  <ContainerFluid
    props={props}
  >
    {children}
  </ContainerFluid>
)