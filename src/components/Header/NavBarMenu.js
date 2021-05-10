import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group'; 
import { ContentContainer } from '../htmlContainer/ContentContainer';
import { DogSvg, 
        BeforeMakeFriendSvg,
        NeedOfVeterinarySvg,
        ContactInformationSvg,
        CatSvg,
        YouFoundAnimalSvg,
        BasicInformationSvg,
        NewsAboutUsSvg,
        FinancialReportsSvg,
        YourPetIsMissingSvg,
        AttachAnimalSvg } from '../svgIcons/SvgIcons';

const componentsIconsNavBar = {
  DogSvg: DogSvg,
  CatSvg: CatSvg,
  BeforeMakeFriendSvg: BeforeMakeFriendSvg,
  NeedOfVeterinarySvg: NeedOfVeterinarySvg,
  ContactInformationSvg: ContactInformationSvg,
  YouFoundAnimalSvg: YouFoundAnimalSvg,
  BasicInformationSvg: BasicInformationSvg,
  NewsAboutUsSvg: NewsAboutUsSvg,
  FinancialReportsSvg: FinancialReportsSvg,
  YourPetIsMissingSvg: YourPetIsMissingSvg,
  AttachAnimalSvg: AttachAnimalSvg,
};

const NavBarMenuWrapper = styled.nav`
  position: fixed;
  visibility: hidden;
  z-index: -2;
  width: 30%;
  background-color: rgb(204,204,255);
  padding-top: ${({...props}) => props.heightMenu}px;
  padding-bottom: 1em;
  padding-right: 1em;
  padding-left: 0.2em;
  top: 0;
  height: 100%;
  transform: translateX(-200%);
  opacity: 0;
  transition: all .3s;
  &[data-active-visible='true'] {
    visibility: visible;
    transform: translateX(0);
    opacity: 1;
  }
  &::before{
    position: absolute;
    content: "";
    background-color: rgb(204,204,255);
    width: 40em;
    height: 100%;
    left: -39.8em;
    top: 0;
  }
  & svg {
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;
    z-index: -1;
    padding: 1em;
    height: 30vmin;
    filter: blur(0.05em);
    & path {
      fill: rgba(0,0,0,0.07)
    }
  }

  @media(max-width: 1060px) {
    width: 50%;
  }

  @media(max-width: 680px) {
    width: 75%;
  }

  @media(max-width: 540px) {
    width: 100%;
    & svg {
      height: 80vmin;
    }
  }
`;

const NavBarCloseButton = styled.div`
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

const NavBarMenuItems = styled.ul`
  padding: 1em 1em 1em 0;
  & li + li {
    margin-top: 0.7em;
  }
`;

const NavBarMenuItem = styled.li`
  color: rgba(255, 0, 0, 0.7);
  font-size: 1.2em;
  font-style: italic;
  font-weight: 400;
  & a {
    display: flex;
    height: fit-content;
    & svg {
      width: 1.6em;
      height: auto;
      position: static;
      margin-right: 0.5em;
      z-index: 0;
      padding: 0;
      display: block;
      filter: blur(0);
      }
      & path {
        fill: rgba(255,21,49,0.7);
      }
    & span {
      width: fit-content;
      padding-top: 0.4em;
      padding-bottom: 0.4em;
      border-bottom: 1px solid rgba(255,0,0,1);
    }

    &.active,
    &:hover {
      filter: drop-shadow(0 0 3px rgba(255,21,49,0.9));
      font-weight: 500;
    }
  }

  &.fade-exit-active {
    transition-delay: ${(({ delay }) => delay)}s !important;
  }
  &.fade-appear-active {
    transition-delay: ${(({ delay }) => delay + .2)}s !important;
  }
  &.fade-enter,
  &.fade-appear {
  opacity: 0;
  transform: translateX(-200%);
  }
  &.fade-enter-active,
  &.fade-appear-active {
    opacity: 1;
    transform: translateX(0%);
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  &.fade-exit-active {
    opacity: 0;
    transform: translateX(200%);
  }
  &.fade-enter-active,
  &.fade-appear-active {
    transition: opacity 800ms, transform 200ms ease-out;
  }
  &.fade-exit-active {
    transition: opacity 200ms, transform 300ms ease-in;
  }
`;

const SvgWrapper = styled.div`
  width: 2.1em; 
  display: flex;
  align-items: center;  
`;

export const NavBarMenu = (props) => {
  const BackGroundIcon = props.backGroundIcon;
  const navBarMenuItems = props.dataNavBar.menuItems;
  const menuManagement = props.navBarMenuManagement;

  const IconsNavBarRender = (props) => {
    const IconsNavBarList = componentsIconsNavBar[props.iconName];
    return (<>
      <IconsNavBarList />
    </>);
  };

  const closeNavBar = () => {
    props.setNavBarMenuManagement({
      ...props.navBarMenuManagement,
      navBarOverlay: !menuManagement.navBarOverlay,
      navBarMenu: !menuManagement.navBarMenu,
      appearStatus: false,
    });
  };

  const closeNavBarMenu = (e) => {
    const target = e.target.closest('a');

    if(target && !target.classList.contains('active')) {
      closeNavBar();
    }
  };

  const closeDropMenu = () => {
    if(props.stateNavDropMenu) props.visibleNavDropMenu();
  };

  return (
    <>
      <ContentContainer>
        <NavBarMenuWrapper
          onClick={closeDropMenu}
          data-active-visible={menuManagement.navBarMenu}
          heightMenu={menuManagement.navBarMenuHeight}
        >
          <NavBarCloseButton onClick={closeNavBar}/>
          <BackGroundIcon />
          <NavBarMenuItems
            onClick={closeNavBarMenu}
          >
            {navBarMenuItems.map((item, i) => (
              <SwitchTransition
                mode="out-in"
                key={i}
              >
                <CSSTransition
                  key={menuManagement.animationMenuList}
                  appear={menuManagement.appearStatus}
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  classNames='fade'
                >
                  <NavBarMenuItem
                    delay={i / 30}
                  >
                    {item && <NavLink 
                      to={`/${item.link}`}
                    >
                      <SvgWrapper>
                        {item.icon !== '' && <IconsNavBarRender iconName={item.icon}/>}
                      </SvgWrapper>
                      <span>{item.menuItem}</span>
                    </NavLink>}
                  </NavBarMenuItem>
                </CSSTransition>
              </SwitchTransition>
            ))}
          </NavBarMenuItems>
        </NavBarMenuWrapper>
      </ContentContainer>
    </>
  );
};