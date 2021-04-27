import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FluidContainer } from '../HTMLContainer/FluidContainer';
import topBanner from '../../images/topBanner.jpg';
import { ContentContainer } from '../HTMLContainer/ContentContainer';
import { Logo } from '../AnimationElements/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faYandex, faOdnoklassniki, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from '../SocialLink/SocialLink';
import instagramIcon from '../../images/instagram.svg';
import { NavMenu } from './NavMenu';

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

const SocialMenu = styled.nav`
  margin-top: 1.5em;
  margin-bottom: auto;
  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1em;
    & li {
      height: 2.2em;
      width: 2.2em;
      background-color: rgba(255,255,255,0.2);
      border-radius: 50%;
      transition: all .2s;
      &:hover{
        background-color: rgba(255,255,255,0.7);
      }
    }
    & li + li {
      margin-left: 0.7em;
    }
  }

  @media (max-width: 380px) {
    & ul {
      margin-right: 0.3em;
      & li + li {
        margin-left: 0.3em;
      }
    }
  }
`;

const InstagramImg = styled.img`
  height: 1.5em;
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
                <SocialMenu>
                  <ul>
                    <li>
                      <SocialLink
                        color='rgb(77,180,254)'
                        href='https://vk.com/serdcem_k_serdcy_46'
                      >
                        <FontAwesomeIcon icon={faVk} size="lg" fixedWidth />
                      </SocialLink>
                    </li>
                    <li>
                      <SocialLink
                        color='rgb(255,0,0)'
                        href='https://zen.yandex.ru/serdcem_k_serdcy_46'
                      >
                        <FontAwesomeIcon icon={faYandex} size="lg" fixedWidth />
                      </SocialLink>
                    </li>
                    <li>
                      <SocialLink
                        color='rgb(238,130,8)'
                        href='https://ok.ru/serdtsem'
                      >
                        <FontAwesomeIcon icon={faOdnoklassniki} size="lg" fixedWidth />
                      </SocialLink>
                    </li>
                    <li>
                      <SocialLink
                        href='https://www.instagram.com/p/CKmYoCZhYWd/'
                      >
                        <InstagramImg src={instagramIcon} alt="instagram" />
                      </SocialLink>
                    </li>
                    <li>
                      <SocialLink
                        color='rgb(255,0,0)'
                        href='https://www.youtube.com/channel/UCafm7Mt8Kf0I3BY4g9d44xA/videos?disable_polymer=1'
                      >
                        <FontAwesomeIcon icon={faYoutube} size="lg" fixedWidth />
                      </SocialLink>
                    </li>
                  </ul>
                </SocialMenu>
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