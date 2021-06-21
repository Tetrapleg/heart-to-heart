import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AsideWrapper = styled.aside`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */
  position: relative;
  width: 16rem;
  text-align: center;
  /* height: fit-content; */
  ${({props}) => props.side ?
    props.side === "left" ? `padding-right: 0.5rem;
                            padding-left: 1.5rem;` :
    props.side === "right" ? `padding-right: 1.5rem;
                            padding-left: 0.5rem;` : undefined
    : undefined
  };
  @media(max-width: 1300px) {
    display: none;
  }
`;

const AsideContentWrapper = styled.section`
  padding-bottom: 3em;
  padding-top: 3em;
  width: 14rem;
  ${({valuePosition}) => {
    switch(valuePosition[0]) {
      case "sticky": 
        return `position: sticky;
                top: 3em;`;
      case "fixedBottom": 
        return `position: fixed;
                bottom: 1em;
                padding-bottom: 2em;`;
      case "absoluteBottom": 
        return `position: absolute;
                bottom: 1em;
                padding-bottom: 2em;`;
      case "fixedTop": 
        return `position: fixed;
                top: 3em;`;
      case "absoluteTop": 
        return `position: absolute;
                top: 3em;`;
      case "staticTop": 
        return `position: static;
                margin-top: ${valuePosition[1]}px;`;
      case "static": 
        return `position: static;`;
      default:
        return;
    }}
  };
`;

export const Aside = ({ children, ...props }) => {
  const wrapperRef = useRef();
  const contentRef = useRef();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [valuePosition, setValuePosition] = useState(["static"]);
  const [prevLocation, setPrevLocation] = useState(null);

  const scrollDoun = useCallback((wrapper, content, deviceHeight) => {
    const wrapperRectBottom = wrapper.getBoundingClientRect().bottom;
    const contentRectBottom = content.getBoundingClientRect().bottom;
    const wrapperRectTop = wrapper.getBoundingClientRect().top;
    const contentRectTop = content.getBoundingClientRect().top;

    if(valuePosition[0] !== "staticTop" && valuePosition[0] !== "absoluteTop") {
      const marginTop = Math.abs(Math.round(wrapperRectTop - contentRectTop));
      setValuePosition(["staticTop", marginTop]);
    }

    if(contentRectBottom <= deviceHeight) {
      if(contentRectBottom < wrapperRectBottom && valuePosition[0] !== "absoluteBottom") {
        setValuePosition(["fixedBottom"]);
      } else {
        setValuePosition(["absoluteBottom"]);
      }
    }
  }, [valuePosition]);
  
  const scrollUp = useCallback((wrapper, content) => {
    const wrapperRectTop = wrapper.getBoundingClientRect().top;
    const contentRectTop = content.getBoundingClientRect().top;

    if(valuePosition[0] !== "staticTop" && valuePosition[0] !== "absoluteBottom") {
      const marginTop = Math.abs(Math.round(wrapperRectTop - contentRectTop));
      setValuePosition(["staticTop", marginTop]);
    }

    if(contentRectTop > 40) {
      if(contentRectTop - 50 > wrapperRectTop && valuePosition[0] !== "absoluteTop") {
        setValuePosition(["fixedTop"]);
      } else {
        setValuePosition(["absoluteTop"]);
      }
    } 
  }, [valuePosition]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if(prevLocation !== props.location) {
      setValuePosition(["static"]);
      setPrevLocation(props.location);
    }
 
    const handleScroll = (e) => {
      const scrollY = e.target.documentElement.scrollTop;
      const deviceHeight = e.target.documentElement.clientHeight;
   
      if(wrapper && content) {
        const wrapperHeight = wrapper.getBoundingClientRect().height;
        const contentHeight = content.getBoundingClientRect().height;

        if(contentHeight >= wrapperHeight) return;

        if(contentHeight > deviceHeight){
          if(prevScrollY < scrollY) {
            scrollDoun(wrapper, content, deviceHeight);
            setPrevScrollY(scrollY);
          } else if(prevScrollY > scrollY) {
            scrollUp(wrapper, content);
            setPrevScrollY(scrollY);
          }
        } else if(contentHeight <= deviceHeight && valuePosition[0] !== "sticky") {
          setValuePosition(["sticky"]);
        }
        // console.log("wrapper: ", wrapperHeight, "content: ", contentHeight);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY, scrollDoun, scrollUp, props.location, prevLocation, valuePosition]);

  return (
  <AsideWrapper 
    props={props}
    ref={wrapperRef}
  >
    <AsideContentWrapper 
      ref={contentRef}
      valuePosition={valuePosition}
    >
      {children}
    </AsideContentWrapper>
  </AsideWrapper>
)}