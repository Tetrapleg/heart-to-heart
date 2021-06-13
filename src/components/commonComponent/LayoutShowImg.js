import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFullSizeImg } from '../../reducers/displayingFullSizeContentReducer';
import { Preloader } from '../animationElements/Preloader';
import { useState } from 'react';
import { CloseModalButtonWrapper } from './LayoutShowVideo';
import { CloseModalButton } from './CloseModalButton';

const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  backdrop-filter: blur(0.2em);
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  cursor: zoom-out;
`;

const ImgWrapper = styled.div`
  position: relative;
  padding: 1em;
  background-color: rgba(204,204,255,0.7);
  border-radius: 0.5em;
  &[data-hidden-padding='true'] {
    padding: 0em;
  }

  & img {
    max-height: 90vh;
    position: relative;
  }  
  
  & iframe {
    height: 90vh;
    width: 90vw;
    position: relative;
  }
`;

export const LayoutShowImg = ({ urlImg }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(true);

  const closeModalImg = () => {
    dispatch(setFullSizeImg(null));
  };

  const imgOnLoad = () => {
    setLoaded(false);
  };
  console.log(urlImg);
  return (
    <Overlay
      onClick={closeModalImg}>
      <CloseModalButtonWrapper >
        <CloseModalButton closeModal={closeModalImg}/>
      </CloseModalButtonWrapper>
      <ImgWrapper data-hidden-padding={loaded}>
        {loaded && <Preloader />}
        {urlImg.ext ?         
          <iframe 
            src={urlImg.fullSizeTypeName} 
            title="pdf"  
            onLoad={imgOnLoad} 
            onClick={closeModalImg}
            frameBorder="0" 
            allowFullScreen
          /> :
          <img src={urlImg.fullSizeTypeName} 
            alt="фото" 
            onLoad={imgOnLoad}
          />
        }
      </ImgWrapper>
    </Overlay>
  );
};
