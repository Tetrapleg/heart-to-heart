import styled from 'styled-components';

const LineElement = styled.hr`
  background-image: linear-gradient(to right, transparent, rgba(255,21,49,1), transparent);
  border: 0;
  height: 1px;
  margin: 0.5em 0;
  width: 33%;
  box-sizing: content-box;
  display: inline-block;
`;

export const DividingLine = () => (
  <LineElement ></LineElement>
);