import styled from 'styled-components';

const Text = styled.p`
  text-align: justify;
  text-indent: 1em;
  line-height: 1.3;
  font-weight: 300;
  word-wrap: break-word;
`;

export const TextItem = ({ children }) => (
  <Text >
    {children}
  </Text>
);