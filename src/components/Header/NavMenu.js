import { useState, createRef, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import { DogAndCatSvg, DunnoSvg, HelpAnimalsSvg, ShouldSvg, ThinkerSvg } from '../svgIcons/SvgIcons';
import { dbMenu } from '../DB';
import { NavBarMenu } from './NavBarMenu';
import { NavBarMenuOverlay } from './NavBarMenuOverlay';
import { Link } from 'react-router-dom';

const componentsIcons = {
  DogAndCatSvg: DogAndCatSvg,
  DunnoSvg: DunnoSvg,
  HelpAnimalsSvg: HelpAnimalsSvg,
  ShouldSvg: ShouldSvg,
  ThinkerSvg: ThinkerSvg,
};

const NavMenuContainer = styled.div`
  width: 100%;
  height: ${({elemRefHeight}) => elemRefHeight -2}px;
`;

const NavMenuWrapper = styled.div`
  position: relative;
  width: 100%;
  &[data-scroll-fixed='true'] {
    position: fixed;
    top: 0;
  }
`;

const NavMenuInner = styled.nav`
  height: 3.1em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  border-top: 1px solid rgba(255,0,0,0.8);
  background-color: rgb(93,76,96);
`;

const NavMenuUl = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: max-content;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  & li + li {
    margin-left: 5px;
  }
`;

const NavMenuLi = styled.li`
  width: fit-content;
  color: rgba(255,21,49,0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3em 0.5em;
  background-color: rgb(204,204,255);
  border: 1px solid rgba(255,21,49,0.9);
  box-shadow:
   inset 0 0 3px 1px rgba(0,0,0,.8),
   inset rgba(0,0,0,.3) -3px -3px 8px 5px,
   inset rgba(255,255,255,.5) 5px 5px 8px 5px,
   1px 1px 1px rgba(255,255,255,.1),
   -2px -2px 5px rgba(0,0,0,.5);
  border-radius: 0.3em;
  transition: all .3s;
  cursor: pointer;
  & a {
    display: flex;
    align-items: center;
  }

  &.active,
  &:hover {
    background-color: rgba(255,21,49,0.9);
    & span {
      color: rgba(204,204,255,1);
      filter: drop-shadow(0 0 2px rgba(204,204,255,0.5));
      & svg {
        & path {
          fill: rgba(204,204,255,1);
        }
      }
    }
  }

  &:active {
    box-shadow:
      inset 0 0 5px 3px rgba(0,0,0,.8),
      inset rgba(0,0,0,.3) -5px -5px 8px 5px,
      inset rgba(255,255,255,.5) 5px 5px 8px 5px,
      1px 1px 1px rgba(255,255,255,.2),
      -2px -2px 5px rgba(0,0,0,.5);
  }
`;

const IconSpan = styled.span`
  
  & svg {
    height: 1.5em;
    & path {
      fill: rgba(255,21,49,0.7);
    }
  }
`;

const TextSpan = styled.span`
  margin-left: 0.2em;
`;

const NavMenuBurger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  margin-left: 0.5em;
  cursor: pointer;
  display: none;
  &:hover {
    background-color: rgba(255,255,255,0.2);
  }
`;

const NavMenuDots = styled.span`
  position: relative;
  width: 0.2em;
  height: 0.2em;
  border-radius: 50%;
  background-color: rgba(255,0,0,1);
  &::before,
    ::after {
    position: absolute;
    content: '';
    width: 0.2em;
    height: 0.2em;
    border-radius: 50%;
    background-color: rgba(255,0,0,1);
  }
  &::before {
    top: -0.5em;
    left: 0;
  }
  &::after {
    top: 0.5em;
    left: 0;
  }
`;

const NavmenuDrop = styled.ul`
  visibility: hidden;
  position: absolute;
  height: fit-content;
  right: 1em;
  top: 3.2em;
  z-index: -1;
  margin: 0 auto;
  width: fit-content;
  padding: 0.5em;
  border-radius: .5em;
  background-color: rgb(93,76,96);
  transform: translateY(-300%);
  transition: all .2s;
  & li + li {
    margin-top: .2em;
  }

  &[data-active-drop="true"]{
    visibility: visible;
    transform: translateY(0);
  }
`;

export const NavMenu = ({ scrollTop }) => {
  const [resize, setResize] = useState(0);
  const [stateNavDropMenu, setStateNavDropMenu] = useState(false);
  const [dataNavBar, setDataNavBar] = useState(dbMenu.sideBarMenu.aboutUs);
  const [elemRefHeight, setElemRefHeight] = useState(null);
  const [navBarMenuManagement, setNavBarMenuManagement] = useState({
    navBarOverlay: false,
    navBarMenu: false,
    navBarMenuHeight: null,
    animationMenuList: true,
    appearStatus: false,
  });
  const elemRef = createRef();
  const dropmenuRef = createRef();

  const visibleNavDropMenu = () => {
    setStateNavDropMenu(!stateNavDropMenu);
  };

  useEffect(() => {
    const navMenu = elemRef.current.parentElement;
    const handleLoaded = () => {
      if(navMenu){
        const navBarMenuHeight = navMenu.getBoundingClientRect().bottom;

        setElemRefHeight(navMenu.offsetHeight);
        setNavBarMenuManagement(prevData => {
          return{
            ...prevData,
            navBarMenuHeight: navBarMenuHeight,
          }
        });
      }
    }


    document.addEventListener('DOMContentLoaded', handleLoaded);
    return () => {
      document.removeEventListener('DOMContentLoaded', handleLoaded);
    }
  }, [elemRef]);

  useEffect(() => {
    const closeDropMenu = event => {
      if(!stateNavDropMenu) {
        return
      }

      const main = event.target.closest('main');
      const footer = event.target.closest('footer');
      if(main || footer) {
        visibleNavDropMenu();
      }
    }
    document.addEventListener('click', closeDropMenu);
    return () => document.removeEventListener('click', closeDropMenu);
  });

  useEffect(() => {
    const navBarMenuHeight = elemRef.current.parentElement;
    const handleScroll = () => {
      if(navBarMenuHeight) {
        setNavBarMenuManagement({
          ...navBarMenuManagement,
          navBarMenuHeight: navBarMenuHeight.getBoundingClientRect().bottom,
        })
      }
      
    }

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [elemRef, navBarMenuManagement]);

  useLayoutEffect(() => {
    
    const handleResize = () => {
      const isResize = document.documentElement.clientWidth;

      if(isResize !== resize) {
        const navMenu = elemRef.current;
        const navMenuList = elemRef.current.children;
        const navDropMenu = dropmenuRef.current;
        const navDropMenuList = dropmenuRef.current.children;
        const navmenuWidth = navMenu.offsetWidth;
        const documentWidh = document.documentElement.clientWidth;

        if(navDropMenuList.length) {
          navMenuList[navMenuList.length - 1].style.display = 'flex';
        } else {
          navMenuList[navMenuList.length - 1].style.display = 'none';
        }
   
        if(navmenuWidth >= documentWidh) {
          navDropMenu.prepend(navMenuList[navMenuList.length - 2]);
          handleResize();
        } else if (navDropMenuList.length && (navmenuWidth + navDropMenuList[0].offsetWidth) <= documentWidh){
          navMenuList[navMenuList.length - 1].before(navDropMenuList[0]);
        }

        if(navMenuList[navMenuList.length - 1].style.display === 'none' && stateNavDropMenu) {
          setStateNavDropMenu(!stateNavDropMenu);
        }

        if(navMenu) {
          setNavBarMenuManagement(prevData => {
            return{
              ...prevData,
              navBarMenuHeight: navMenu.parentElement.getBoundingClientRect().bottom,
            }
          });
        }
   
        setResize(document.documentElement.clientWidth);

      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [resize, elemRef, dropmenuRef, stateNavDropMenu]);

  const handleNavBar = (event, data) => {
    addClassActive(event);
    
    if(!navBarMenuManagement.navBarMenu) {
      setDataNavBar(data); 
      openNavBar();
    } else {
      setDataNavBar(prevData => {
        if(prevData === data) {
          setNavBarMenuManagement({
            ...navBarMenuManagement,
            appearStatus: true,
          })
          return data;
        } else {
          setNavBarMenuManagement({
            ...navBarMenuManagement,
            animationMenuList: !navBarMenuManagement.animationMenuList,
            appearStatus: true,
          })

          const differenceLength = prevData.menuItems.length - data.menuItems.length;
          if(differenceLength > 0) {
            for(let diff = 1; diff <= differenceLength; diff++) {
              data.menuItems.push(null);
            }
          }
        }
     
        return data;
      });
    }
  };

  const openNavBar = () => {
      setNavBarMenuManagement({
        ...navBarMenuManagement,
        navBarMenu: !navBarMenuManagement.navBarMenu,
        navBarOverlay: !navBarMenuManagement.navBarOverlay,
      })
    
  };

  const closeNavBar = (event) => {
    addClassActive(event);

    if(navBarMenuManagement.navBarMenu) {
      setNavBarMenuManagement({
        ...navBarMenuManagement,
        navBarMenu: !navBarMenuManagement.navBarMenu,
        navBarOverlay: !navBarMenuManagement.navBarOverlay,
      })
    }
  };

  const addClassActive = (event) => {
    const eventElement = event.target.closest('li');
    const element = [...elemRef.current.children, ...dropmenuRef.current.children]
          .find(i => i.tagName.toLowerCase() === 'li' && i.classList.contains('active'));

    if(stateNavDropMenu) {
      visibleNavDropMenu();
    }

    if(!element) {
      eventElement.classList.add('active');
    } else {
      if(element === eventElement) {
        return;
      } else {
        element.classList.remove('active');
        eventElement.classList.add('active');
      }
    }
  };

  return(
    <>
      <NavMenuContainer elemRefHeight={elemRefHeight}>
        <NavMenuWrapper data-scroll-fixed={scrollTop}>
          <NavMenuInner>
            <NavMenuUl ref={elemRef}>
              <NavMenuLi onClick={(e) => handleNavBar(e, dbMenu.sideBarMenu.aboutUs)}>
                <IconSpan>
                  <ShouldSvg />
                </IconSpan>
                <TextSpan>О нас</TextSpan>
              </NavMenuLi>
              <NavMenuLi onClick={(e) => handleNavBar(e, dbMenu.sideBarMenu.takeAPet)}>
                <IconSpan>
                  <DogAndCatSvg />
                </IconSpan>
                <TextSpan>Взять питомца</TextSpan>
              </NavMenuLi>
              <NavMenuLi onClick={(e) => handleNavBar(e, dbMenu.sideBarMenu.facingProblem)}>
                <IconSpan>
                  <ThinkerSvg />
                </IconSpan>
                <TextSpan>Вы столкнулись с проблемой</TextSpan>
              </NavMenuLi>
              {/* <NavMenuLi onClick={closeNavBar}>
                <Link to='/useful_information'>
                  <IconSpan>
                    <DunnoSvg />
                  </IconSpan>
                  <TextSpan>Полезная информация</TextSpan>
                </Link>
              </NavMenuLi> */}
              <NavMenuLi onClick={closeNavBar}>
                <Link to='/help_for_animals'>
                  <IconSpan>
                    <HelpAnimalsSvg />
                  </IconSpan>
                  <TextSpan>Помощь животным</TextSpan>
                </Link>
              </NavMenuLi>
              <NavMenuBurger onClick={visibleNavDropMenu}>
                <NavMenuDots />
              </NavMenuBurger>
            </NavMenuUl>
          </NavMenuInner>
          <NavmenuDrop 
            data-active-drop={stateNavDropMenu}
            ref={dropmenuRef}
          />
          <NavBarMenu
            dataNavBar={dataNavBar}
            backGroundIcon={componentsIcons[dataNavBar.iconsComponent]}
            navBarMenuManagement={navBarMenuManagement}
            setNavBarMenuManagement={setNavBarMenuManagement}
            stateNavDropMenu={stateNavDropMenu}
            visibleNavDropMenu={visibleNavDropMenu}
          />
        </NavMenuWrapper>
      </NavMenuContainer>
      {navBarMenuManagement.navBarOverlay && 
      <NavBarMenuOverlay
        navBarMenuManagement={navBarMenuManagement} 
        setNavBarMenuManagement={setNavBarMenuManagement} 
        stateNavDropMenu={stateNavDropMenu}
        visibleNavDropMenu={visibleNavDropMenu}
      />}
    </>
  )
};