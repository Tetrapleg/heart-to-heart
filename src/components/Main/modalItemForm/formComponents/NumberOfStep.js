import styled from 'styled-components';

const StepWrapper = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PastStep = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid rgb(68, 189, 125);
  background-color: rgb(68, 189, 125);
  margin-right: 10px;
`;

const WillStep = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid rgb(68, 189, 125);
  background-color: #fff;
  margin-right: 10px;
`;

const allSteps = [1, 2, 3, 4]

export const NumberOfStep = ({ stateStep }) => (
  <StepWrapper>
    {allSteps.map(item => (item <= stateStep ? 
          <PastStep key={item}/> : 
          <WillStep key={item}/>)
    )}
  </StepWrapper>
);