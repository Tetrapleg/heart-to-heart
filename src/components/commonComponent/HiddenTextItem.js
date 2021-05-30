import styled from 'styled-components';

const Text = styled.p`
  text-align: left;
  text-indent: 1em;
  line-height: 1.3;
  font-weight: 500;
  font-size: 0.8em;
  padding-top: 0.5em;
  padding-left: 1em;
  cursor: pointer;
`;

export const HiddenTextItem = ({ children, setHiddenOff }) => (
  <Text onClick={() => setHiddenOff(false)}>
    {children}
  </Text>
);