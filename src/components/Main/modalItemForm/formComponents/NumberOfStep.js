import styled, { css } from 'styled-components';
import { ShouldSvg } from '../../../svgIcons/SvgIcons';

const StepWrapper = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const stylesStep = css`
  display: flex;
  width: 1em;
  height: 1em;
  margin-right: 1em;
`;

const PastStep = styled.span`
  ${stylesStep}  
  & svg {
    & path {
      fill: rgba(255,21,49,0.8);
    }
  }
`;

const WillStep = styled.span`
  ${stylesStep}
  & svg {
    & path {
      filter: drop-shadow(0 0 2px rgba(255,21,49,0.9));
      fill: rgba(255,255,255,1);
    }
  }
`;

const allSteps = [1, 2, 3, 4]

export const NumberOfStep = ({ stateStep }) => (
  <StepWrapper>
    {allSteps.map(item => (item <= stateStep ? 
          <PastStep key={item}><ShouldSvg /></PastStep> : 
          <WillStep key={item}><ShouldSvg /></WillStep>)
    )}
  </StepWrapper>
);