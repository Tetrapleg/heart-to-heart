export const renderNavMenu = (elemRef, dropmenuRef) => {
  const navMenu = elemRef.current;
  const navmenuWidth = navMenu.offsetWidth;
  const documentWidh = document.documentElement.clientWidth;

  if(navmenuWidth > documentWidh) {
    dropmenuRef.current.prepend(elemRef.current.children[elemRef.current.children.length - 2]);
    // setOrientElement(false);
    renderNavMenu(elemRef, dropmenuRef);
  } else if (dropmenuRef.current.children.length && (navmenuWidth + dropmenuRef.current.children[0].offsetWidth) <= documentWidh){
    elemRef.current.children[elemRef.current.children.length - 1].before(dropmenuRef.current.children[0]);
  }
};