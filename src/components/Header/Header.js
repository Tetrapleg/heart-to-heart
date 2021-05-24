import { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FluidContainer } from '../htmlContainer/FluidContainer';
import topBanner from '../../images/topBanner.jpg';
import { ContentContainer } from '../htmlContainer/ContentContainer';
import { Logo } from '../animationElements/Logo';
import { NavMenu } from './NavMenu';
import { SocialMenu } from '../commonComponent/SocialMenu';

const HeaderWrapper = styled.header`
  width: 100%;
`;

const BackGround = styled.div`
  position: relative;
  height: 20vw;
  max-height: 15em;
  min-height: 8em;
  background-image: url(${topBanner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ToneLayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
`;

const HeaderContent = styled.div`
  height: calc(100% - 2em);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.span`
  color: rgba(255,255,255,0.9);
  text-shadow: 1px 1px 2px black, 0 0 1em red;
  clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
  width: fit-content;
  display: block;
  font-size: 1.5em;
  padding-left: 2em;
  padding-right: 1em;
  background-color: rgba(255,255,255,0.3);

  @media(max-width: 580px) {
    padding-left: 1em;
  }
`;

export const Header = () => {
  const backGroundRef = createRef();
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if(backGroundRef.current) {
        const isScrolled = window.scrollY > backGroundRef.current.offsetHeight - 2;
        if (isScrolled !== scrollTop) {
          setScrollTop(!scrollTop);
        }
      }
    };
    handleScroll();

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop, backGroundRef]);
  
  return (
    <HeaderWrapper>
      <FluidContainer
        position='relative'
        zIndex='10'
      >
        <BackGround ref={backGroundRef}>
          <ToneLayer>
            <ContentContainer>
              <HeaderContent>
                <Logo />
                <SocialMenu />
              </HeaderContent>
              <HeaderTitle>СЕРДЦЕМ К СЕРДЦУ</HeaderTitle>
            </ContentContainer>
          </ToneLayer>
        </BackGround>
        <NavMenu 
          scrollTop={scrollTop}
        />
      </FluidContainer>
    </HeaderWrapper>
  )
};