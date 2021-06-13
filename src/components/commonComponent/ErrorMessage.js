import styled from 'styled-components';
import { addErrorMessage } from '../functions/addErrorMessage';
import { DividingLine } from './DividingLine';
import { ErrorTitleWrapper } from './ErrorTitleWrapper';

const ErrorText = styled.p`
  font-size: 0.9em;
  font-weight: 400;
`;

export const ErrorMessage = ({ error }) => (
  <>
    <ErrorTitleWrapper >
      Извините, произошла ошибка...
    </ErrorTitleWrapper>
    <DividingLine />
    <ErrorText >
      {addErrorMessage(error)}
    </ErrorText>
  </>
)