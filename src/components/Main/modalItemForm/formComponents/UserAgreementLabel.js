import { FormLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFullSizePDF } from '../../../../reducers/displayingFullSizeContentReduser';

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
`;

export const UserAgreementLabel = ({ hasUserAgreement }) => {
  const dispatch = useDispatch();

  return (
    <LaberWrapper>
      Я согласен на обработку  
      <ButtonPrivPolicy 
        type="button" 
        onClick={()=>dispatch(setFullSizePDF("privacy_policy_fullsize.pdf"))}
      >персональных данных</ButtonPrivPolicy>
      <FormLabel
        required
        error={hasUserAgreement}
      />
    </LaberWrapper>
  )
};