import styled from 'styled-components';

const Button = styled.button`
  color: rgb(255, 255, 255);
  border: 5px solid rgb(68, 189, 125);
  background-color: rgb(68, 189, 125);
  border-radius: 50px;
  display: inline-block;
  font-family: 'Roboto',Arial,sans-serif;
  height: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-weight: 700;
  transition: all .5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.5) 10px 10px 15px 5px;
  }
`;

export const PrimaryButton = ({ children, props }) => {

  return (
    <Button
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};