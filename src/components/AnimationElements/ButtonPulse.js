import styled, { keyframes } from 'styled-components';
import { MessageSvg } from '../svgIcons/SvgIcons';

const buttonAnimationOuter = keyframes`
  0% {
  transform: translate3d(0, 0, 0) scale(1);
  box-shadow:
    0 0 0 0em rgba(255,0,0, 0),
    0em 0.05em 0.1em rgba(0,0,0, 0.2);
  }
  33.3333% {
    transform: translate3d(0, 0, 0) scale(1.1);
    box-shadow:
      0 0 0 0em rgba(255,0,0, 0.3),
      0em 0.05em 0.1em rgba(0,0,0, 0.5);
  }
  66.6666% {
    transform: translate3d(0, 0, 0) scale(1);
    box-shadow:
      0 0 0 0.2em rgba(255,0,0, 0),
      0em 0.05em 0.1em rgba(0,0,0, 0.2);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    box-shadow:
      0 0 0 0em rgba(255,0,0, 0),
      0em 0.05em 0.1em rgba(0,0,0, 0.2);
  }
`;

const buttonAnimationInner = keyframes`
  0% {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(0);
  }
  33.3333% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(0.9);
  }
  66.6666% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0);
  }
`;

const ButtonAnimation = styled.i`
  position: fixed;
  bottom: 4vmax;
  right: 4vmax;
  display: inline-block;
  margin: 0;
  width: 60px;
  height: 60px;
  font-size: 25vmin;
  background-color: rgba(93,76,96, 0.9);
  border: 1px solid red;
  border-radius: 50%;
  box-shadow:
    0 0 0 0.1em rgba(93,76,96, 1),
    0em 0.05em 0.1em rgba(0,0,0, 0.2);
  backdrop-filter: blur(0.05rem);
  transform: translate3d(0, 0, 0) scale(1);
  cursor: pointer;
  animation: ${buttonAnimationOuter} 3000ms infinite;
  &::before{
    position: absolute;
    content: "";
    top: -1px;
    left: -1px;
    width: 60px;
    height: 60px;
    background-color: rgba(204,204,255, 0.1);
    border-radius: 100%;
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(0);
    animation: ${buttonAnimationInner} 3000ms infinite;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  top: 15px;
  left: 14px;
  height: 30px;
  width: 30px;
  & svg {
    position: absolute;
    width: 100%;
    left: 0;
    & path {
      fill: rgba(204,204,255,0.9);
    }
  }
  &:hover {
    filter: drop-shadow(0 0 3px rgba(204,204,255,0.9));
  }
`;

export const ButtonPulse = ({ toggleModal }) => (
  <ButtonAnimation 
    onClick={toggleModal}
  >
    <IconWrapper>
      <MessageSvg />
    </IconWrapper>
  </ButtonAnimation>
);