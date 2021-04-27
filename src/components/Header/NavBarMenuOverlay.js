import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(204,204,255,0.2);
  backdrop-filter: blur(0.2em);
`;

export const NavBarMenuOverlay = ({ 
                                navBarMenuManagement, 
                                setNavBarMenuManagement, 
                                stateNavDropMenu, visibleNavDropMenu }) => {
  const closeNavBar = () => {
    if(stateNavDropMenu) visibleNavDropMenu();
    
    setNavBarMenuManagement({
      ...navBarMenuManagement,
      navBarOverlay: !navBarMenuManagement.navBarOverlay,
      navBarMenu: !navBarMenuManagement.navBarMenu,
    });
  };

  return(
    <>
      <Overlay onClick={closeNavBar}/>
    </>
  )
};