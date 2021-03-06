import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  width: 2.5em;
  height: 2.5em;
  background-color: rgb(204,204,255);
  border: 1px solid rgba(255,21,49,0.9);
  box-shadow: inset 0 0 3px 1px rgb(0 0 0 / 60%), 
              inset rgb(0 0 0 / 30%) -3px -3px 8px 5px, 
              inset rgb(255 255 255 / 50%) 5px 5px 8px 5px, 
              1px 1px 1px rgb(255 255 255 / 10%);
  color: rgba(255,21,49,0.8);
  border-radius: 0.3em;
  display: inline-block;
  font-family: 'Roboto';
  margin-top: 1em;
  margin-bottom: 1em;
  width: 100%;
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-weight: 700;
  transition-property: color, filter;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    color: rgba(255,21,49,1);
    text-shadow: 0 0 2px rgba(255,0,0,0.7);
  }

  &:active {
  box-shadow:
    inset 0 0 5px 3px rgba(0,0,0,.8),
    inset rgba(0,0,0,.3) -5px -5px 8px 5px,
    inset rgba(255,255,255,.5) 5px 5px 8px 5px,
    1px 1px 1px rgba(255,255,255,.2);
  }
`;

export const PrimaryButton = ({ children, ...props }) => {

  return (
    <Button
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};