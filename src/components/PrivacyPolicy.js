import { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from '../images/politika.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { makeStyles } from '@material-ui/core';
import { Preloader } from './animationElements/Preloader';

const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
`;

const DocumentWrapper = styled.div`
  display: flex;
  padding: 0 40px;
  background-color: #fff;
`;

const PrivPolicyCloseBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e7f2df;
  border: 3px solid rgb(68,189,125);
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: all .3s;
  &::after {
    position: absolute;
    content: '';
    width: 30px;
    height: 3px;
    background-color: rgb(68,189,125);
    top: 21px;
    left: 7px;
    transform: rotate(45deg);
  }
  &::before {
    position: absolute;
    content: '';
    width: 30px;
    height: 3px;
    background-color: rgb(68,189,125);
    top: 21px;
    left: 7px;
    transform: rotate(-45deg);
  }
  &:hover {
    transform: scale(1.1)
  }
`;

const NavWrapper = styled.div`
  height: fit-content;
  text-align: center;
  position: fixed;
  padding-right: 10px;
  padding-left: 10px;
  right: 0;
  top: calc(50% - 130px);
  border-left: 30px solid #fff;
  border-radius: 30px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  transform: translateX(79%);
  transition-delay: 0.3s;
  transition-duration: 0.3s;
  &::before{
    content: "<";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -20px;
    font-size: 25px;
    font-weight: 700;
    color: rgb(68,189,125);
    transition-delay: 0.3s;
    transition-duration: 0.3s;
  }
  &:hover{
    transform: translateX(0);
    border-left-color: transparent;
    box-shadow: none;
    &::before{
      color: transparent;
    }
  }
`;

const ButtonPrev = styled.button`
  font-style: normal;
  border-radius: 50%;
  border: 1px solid rgb(68,189,125);
  background-color: #e7f2df;
  width: 40px;
  height: 40px;
  &::before{
    content: '<';
    font-size: 30px;
    color: rgb(68,189,125);
  }
  &:disabled{
    &::before{
      opacity: .5;
    }
  }
`;

const NumPagesWrapper = styled.div`
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  border-radius: 5px;
  font-size: 16px;
`;

const NavButtonWrapper = styled.div`
  width: 90px;
  padding-top: 10px;
`;

const ButtonNext = styled.button`
  font-style: normal;
  border-radius: 50%;
  border: 1px solid rgb(68,189,125);
  background-color: #e7f2df;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  &::before{
    content: '>';
    font-size: 30px;
    color: rgb(68,189,125);
  }
  &:disabled{
    &::before{
      opacity: .5;
    }
  }
`;

const ScaleButtonWrapper = styled.div`
  position: relative;
  width: 41px;
  height: 90px;
  display: inline-block;
  border-radius: 40px;
  margin-top: 15px;
  border: 1px solid rgb(68,189,125);
  background-color: #e7f2df;
`;

const ZoomButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 40px 40px 0 0;
  border: none;
  border-bottom: 1px solid rgb(68,189,125);
  background-color: transparent;
  &::before{
    content: "+";
    font-size: 30px;
  }
  &:disabled{
    &::before{
      opacity: .5;
    }
  }
`;

const ZoomOutButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 0 0 40px 40px;
  border: none;
  border-top: 1px solid rgb(68,189,125);
  background-color: transparent;
  &::before{
    content: "-";
    font-size: 30px;
  }
  &:disabled{
    &::before{
      opacity: .5;
    }
  }
`;

const useStyles = makeStyles({
  root: {
    overflowY: "scroll",
  },
  pages: {
    boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.75)",
    margin: "10px 15px",
  }
});

export const PrivacyPolicy = ({ togglePrivacyPolicy }) => {
  const styles = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [stateResize, setStateResize] = useState(window.innerWidth);
  const overlayRef = createRef();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const changeZoom = (resize) => {
    setZoom(prevZoom => prevZoom + resize);
  };

  const upZoom = () => {
    changeZoom(0.1);
  };

  const outZoom = () => {
    changeZoom(-0.1);
  }

  const closePrivacyPolicy = (e) => {
    if(e.target.id === "overlayPrivPolicy" ||
        e.target.id === "privPolicyCloseBtn") togglePrivacyPolicy();
  };

  useEffect(() => {
    const clearScroll = overlayRef.current;
    
    if(numPages && overlayRef.current) {
      disableBodyScroll(overlayRef.current);
    }
    
    return () => {
      if(clearScroll) {
        enableBodyScroll(clearScroll);
      }}
  }, [numPages, overlayRef]);

  useEffect(() => {
    const handleResize = () => {
      const isResize = window.innerWidth;
    
      if(isResize !== stateResize){
        setStateResize(window.innerWidth);
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [stateResize]);

  return (
    <Overlay 
      id="overlayPrivPolicy"
      onClick={closePrivacyPolicy}>
      <DocumentWrapper >
        <Document
          inputRef={overlayRef}
          className={styles.root}
          file={samplePDF}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Preloader />}
          renderMode="svg"
          externalLinkTarget="_blank"
        >
          <Page 
            className={styles.pages}
            pageNumber={pageNumber} 
            renderAnnotationLayer
            renderTextLayer
            width={stateResize > 1070 ? 1000 : stateResize - 40}
            scale={zoom}/>
        </Document>
      </DocumentWrapper>
      {numPages && <NavWrapper>
            <PrivPolicyCloseBtn id="privPolicyCloseBtn" onClick={closePrivacyPolicy}/>
            <NumPagesWrapper>
              Страница <div>{pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}</div>
            </NumPagesWrapper>
            <NavButtonWrapper>
              <ButtonPrev
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              />
              <ButtonNext
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              />
            </NavButtonWrapper>
            <ScaleButtonWrapper>
              <ZoomButton 
                type="button"
                disabled={zoom >= 1.5}
                onClick={upZoom}
              />
              <ZoomOutButton 
                type="button"
                disabled={zoom <= 0.5}
                onClick={outZoom}
              />
            </ScaleButtonWrapper>
          </NavWrapper>}
    </Overlay>
  );
};