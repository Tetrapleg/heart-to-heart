import styled from 'styled-components';

const InputWrap = styled.div`
  width: 100%;
  max-height: 237px;
  overflow-y: scroll;
`;

export const InputWrapper = ({ children, ...props }) => {
  return (
    <InputWrap {...props}>
      {children}
    </InputWrap>
  );
};