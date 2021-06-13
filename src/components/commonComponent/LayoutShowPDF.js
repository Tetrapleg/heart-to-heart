import { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { makeStyles } from '@material-ui/core';
import { Preloader } from '../animationElements/Preloader';
import { CloseModalButton } from './CloseModalButton';
import { useDispatch } from 'react-redux';
import { setFullSizePDF } from '../../reducers/displayingFullSizeContentReducer';
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: blur(0.2em);
  display: flex;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
`;

const DocumentWrapper = styled.div`
  display: flex;
  padding: 0 40px;
  background-color: #fff;
`;

const NavWrapper = styled.div`
  height: fit-content;
  text-align: center;
  position: fixed;
  padding-right: 10px;
  padding-left: 10px;
  right: 0;
  top: calc(50% - 130px);
  border-left: 30px solid #E6E6FA;
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
    color: rgba(255,21,49,0.7);
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

const CloseBtnWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding-left: 1em;
`;

const NumPagesWrapper = styled.div`
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  background-color: #E6E6FA;
  border-radius: 5px;
  font-size: 1rem;
`;

const NavButtonWrapper = styled.div`
  width: 90px;
  padding-top: 10px;
`;

const NavButton = styled.button`
  position: relative;
  width: 2.5em;
  height: 2.5em;
  background-color: rgb(204,204,255);
  border: 1px solid rgba(255,21,49,0.9);
  box-shadow: inset 0 0 3px 1px rgb(0 0 0 / 60%), 
              inset rgb(0 0 0 / 30%) -3px -3px 8px 5px, 
              inset rgb(255 255 255 / 50%) 5px 5px 8px 5px, 
              1px 1px 1px rgb(255 255 255 / 10%);
  cursor: pointer;

  &::before,
  ::after {
    color: rgba(255,21,49,0.7);
  }

  &:hover {
    &::before,
    ::after {
      color: rgba(255,21,49,1);
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

const ButtonPrev = styled(NavButton)`
  font-style: normal;
  border-radius: 50%;
  &::before{
    content: '<';
    font-size: 2em;
  }
  &:disabled{
    &::before{
      opacity: .5;
    }
  }
`;

const ButtonNext = styled(NavButton)`
  font-style: normal;
  border-radius: 50%;
  margin-left: 0.6em;
  &::before{
    content: '>';
    font-size: 2em
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
  border: 1px solid rgba(255,21,49,0.9);
  background-color: rgb(204,204,255);
`;

const ZoomButton = styled(NavButton)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 40px 40px 0 0;
  border: none;
  border-bottom: 1px solid rgba(255,21,49,0.9);
  background-color: transparent;
  &::before{
    content: "+";
    font-size: 2em;
  }
  &:disabled{
    &::before{
      opacity: .5;
    }
  }
`;

const ZoomOutButton = styled(NavButton)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 0 0 40px 40px;
  border: none;
  border-top: 1px solid rgba(255,21,49,0.9);
  background-color: transparent;
  &::before{
    content: "-";
    font-size: 2em;
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

export const LayoutShowPDF = ({ urlPDF }) => {
  const dispatch = useDispatch();
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

  const closeModalPDF = (e) => {
    if(e.target.id === "overlayModalPDF") dispatch(setFullSizePDF(null));
  };

  useEffect(() => {
    const clearScroll = overlayRef.current;
    
    if(numPages && overlayRef.current) {
      disableBodyScroll(overlayRef.current);
    }
    
    return () => enableBodyScroll(clearScroll);
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
      id="overlayModalPDF"
      onClick={closeModalPDF}>
      <DocumentWrapper >
        <Document
          inputRef={overlayRef}
          className={styles.root}
          file={urlPDF}
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
            <CloseBtnWrapper >
              <CloseModalButton closeModal={()=>dispatch(setFullSizePDF(null))}/>
            </CloseBtnWrapper>
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