import { FormLabel } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { PrivacyPolicy } from '../../../PrivacyPolicy';

const LaberWrapper = styled.span`
  font-size: 16px;
`;

const ButtonPrivPolicy = styled.button`
    margin-left: 10px;
    font-style: italic;
    text-decoration: underline;
    border: none;
    background-color: transparent;
    display: inline-block;
    cursor: pointer;
    &:hover{
      color: green;
    }
`;

export const UserAgreementLabel = ({ hasUserAgreement }) => {
  const [ statePrivPolicy, setStatePrivPolicy ] = useState(false);

  const togglePrivacyPolicy = () => {
    setStatePrivPolicy(!statePrivPolicy)
  };
  
  return (
    <LaberWrapper>
      Я согласен на обработку  
      <ButtonPrivPolicy 
        type="button" 
        onClick={togglePrivacyPolicy}
      >персональных данных</ButtonPrivPolicy>
      <FormLabel
        required
        error={hasUserAgreement}
      />
      {statePrivPolicy && <PrivacyPolicy 
                            togglePrivacyPolicy={togglePrivacyPolicy}
                          />}
    </LaberWrapper>
  )
};