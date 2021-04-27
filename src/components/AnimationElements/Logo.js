import React from 'react';
import styled, { keyframes } from 'styled-components';
import pictLogo from '../../images/pictLogo.png';
import heart from '../../images/heart.png';

const pulseHeart = keyframes`
  0% {
    transform: scale( 1 );    
  }
  20% {
    transform: scale( 1.10 )
  } 
  30% {
    transform: scale(1.07)
  }
  40% {
    transform: scale( 1.2 )
  }
`;

const LogoWrapper = styled.a`
  background-color: #fff;
  display: contents;
`;

const LogoImg = styled.figure`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 1em;
  margin-inline-end: 0;
  position: relative;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.2);

  @media (max-width: 580px) {
    width: 9vmax;
    height: 9vmax;
  }  

  @media (max-width: 420px) {
    margin-inline-start: 5px;
  }

  @media (max-width: 380px) {
    margin-inline-start: 0.3em;
  }
`;

const HeartImg = styled.img`
  position: absolute;
  top: 21%;
  left: 13%;
  width: 67%;
  animation: ${pulseHeart} 2s infinite;
`;

const PictImg = styled.img`
  position: absolute;
  width: 76%;
  top: 14%;
  left: 14%;
`;

export const Logo = () => (
  <LogoWrapper href="/">
    <LogoImg>
      <HeartImg src={heart} alt="HertImg"/>
      <PictImg src={pictLogo} alt="LogoImg"/>
    </LogoImg>
  </LogoWrapper>
);