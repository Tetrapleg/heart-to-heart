import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 2em;
  padding-top: 2em;
  padding-right: 1em;
  padding-left: 1em;
  border-radius: 0.5em;
  box-shadow: 0 0 1em 0.1em rgba(0,0,0,0.1);
  margin-top: 2em;
  margin-bottom: 2em;
`;

export const MessageWrapper = ({ children, ...props }) => (
  <Wrapper 
    {...props}
  >
    {children}
  </Wrapper>
)