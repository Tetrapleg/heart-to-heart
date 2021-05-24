import styled from 'styled-components';

const CloseButton = styled.div`
  position: relative;
  width: 2.5em;
  height: 2.5em;
  background-color: rgb(204,204,255);
  border: 1px solid rgba(255,21,49,0.9);
  box-shadow: inset 0 0 3px 1px rgb(0 0 0 / 60%), 
              inset rgb(0 0 0 / 30%) -3px -3px 8px 5px, 
              inset rgb(255 255 255 / 50%) 5px 5px 8px 5px, 
              1px 1px 1px rgb(255 255 255 / 10%);
  border-radius: 50%;
  margin-top: 1em;
  margin-left: auto;
  margin-right: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  &::before,
    ::after {
      position: absolute;
      content: "";
      width: 1.75em;
      height: 0.1em;
      background-color: rgba(255,21,49,0.7);
      top: 47%;
      left: 12%;
    }
  &::before{
    transform: rotate(45deg);
  }
  &::after{
    transform: rotate(-45deg);
  }

  &:hover {
  &::before,
    ::after {
      background-color: rgba(255,21,49,1);
      filter: drop-shadow(0 0 4px rgba(255,0,0,0.7));
    }
  }

  &:active {
  box-shadow:
    inset 0 0 5px 3px rgba(0,0,0,.8),
    inset rgba(0,0,0,.3) -5px -5px 8px 5px,
    inset rgba(255,255,255,.5) 5px 5px 8px 5px,
    1px 1px 1px rgba(255,255,255,.2);
  }
`;

export const CloseModalButton = ({ closeModal }) => (
  <CloseButton onClick={closeModal}></CloseButton>
);