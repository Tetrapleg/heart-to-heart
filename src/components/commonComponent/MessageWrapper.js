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

  @media(max-width: 450px) {
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
    box-shadow: none;
    margin-top: 0;
    margin-bottom: 0;
    border-top: 1px solid rgba(0,0,0,0.1);
  }
`;

export const MessageWrapper = ({ children, ...props }) => (
  <Wrapper 
    {...props}
  >
    {children}
  </Wrapper>
)