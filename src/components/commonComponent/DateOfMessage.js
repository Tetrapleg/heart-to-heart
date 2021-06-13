import styled from 'styled-components';

const Date = styled.p`
  color: rgba(255,21,49,0.8);
  text-align: left;
  padding-left: 1.5em;
  font-size: 0.8em;
  font-weight: 300;
`;

export const DateOfMessage = ({ children }) => (
  <Date >
    {children}
  </Date>
);