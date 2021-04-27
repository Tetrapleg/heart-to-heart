import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const skCircleBounceDelay = keyframes`
    0%, 80%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
`;

const skChild = css`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`;

const skChildBefore = css`
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: rgba(255,21,49,0.9);
    border-radius: 50%;
    -webkit-animation: ${skCircleBounceDelay} 1.2s infinite ease-in-out;
            animation: ${skCircleBounceDelay} 1.2s infinite ease-in-out;
`;

const PreloadWrapper = styled.div`
  width: 10vh;
  height: 10vh;
  position: absolute;
`;

const Preload = styled.div`
  flex: 1 1 25%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(204,204,255, 0.6);
`;

const SkCircleBounce = styled.div`
  width: 7vh;
  height: 7vh;
  position: relative;
  margin: auto;
`;

const SkCircle1 = styled.div`
  ${skChild};
  &::before{
    ${skChildBefore}
  }
`;

const SkCircle2 = styled.div`
  ${skChild};
  -webkit-transform: rotate(30deg);
          transform: rotate(30deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
  }
`;

const SkCircle3 = styled.div`
  ${skChild}
  -webkit-transform: rotate(60deg);
          transform: rotate(60deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
  }
  `;

const SkCircle4 = styled.div`
  ${skChild}
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
  }
  `;

const SkCircle5 = styled.div`
  ${skChild}
  -webkit-transform: rotate(120deg);
          transform: rotate(120deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
  }
  `;

const SkCircle6 = styled.div`
  ${skChild}
  -webkit-transform: rotate(150deg);
          transform: rotate(150deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s;
  }
  `;

const SkCircle7 = styled.div`
  ${skChild}
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
  }
  `;

const SkCircle8 = styled.div`
  ${skChild}
  -webkit-transform: rotate(210deg);
          transform: rotate(210deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
  }
  `;

const SkCircle9 = styled.div`
  ${skChild}
  -webkit-transform: rotate(240deg);
          transform: rotate(240deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
  }
  `;

const SkCircle10 = styled.div`
  ${skChild}
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
  }
  `;

const SkCircle11 = styled.div`
  ${skChild}
  -webkit-transform: rotate(300deg);
          transform: rotate(300deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
  }
  `;

const SkCircle12 = styled.div`
  ${skChild}
  -webkit-transform: rotate(330deg);
          transform: rotate(330deg);
  &::before{
    ${skChildBefore};
    -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s;
  }
  `;

const Preloader = () => (
  <PreloadWrapper>
    <Preload>
      <SkCircleBounce>
        <SkCircle1 />
        <SkCircle2 />
        <SkCircle3 />
        <SkCircle4 />
        <SkCircle5 />
        <SkCircle6 />
        <SkCircle7 />
        <SkCircle8 />
        <SkCircle9 />
        <SkCircle10 />
        <SkCircle11 />
        <SkCircle12 />
      </SkCircleBounce>
    </Preload>
  </PreloadWrapper>
)

export default Preloader;