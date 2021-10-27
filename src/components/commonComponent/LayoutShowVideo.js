import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setFullSizeVideo, setUrlFullSizeVideo } from '../../reducers/displayingFullSizeContentReducer';
import { useEffect, useState } from 'react';
import { getJsonpVkApiData } from '../actions/getJsonpVkApiData';
import { Preloader } from '../animationElements/Preloader';
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  cursor: zoom-out;
`;

 export const CloseModalButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding: 1em;
  background-color: rgba(204,204,255,0.7);
  border-radius: 0.5em;
  &[data-padding-hidden='true'] {
    padding: 0;
  }

  & iframe {
    max-height: 90vh;
    max-width: 90vw;
    position: relative;
  }
`;

export const LayoutShowVideo = ({ idVideo }) => {
  const dispatch = useDispatch();
  const urlVideo = useSelector(state => state.fullSizeContent.urlVideo, shallowEqual);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    dispatch(getJsonpVkApiData({method: "video.get", owner_id: idVideo[0], requestParams: [`videos=${idVideo[0]}_${idVideo[1]}`]}));
  }, [dispatch, idVideo]);

  const closeModalVideo = () => {
    dispatch(setFullSizeVideo(null));
    dispatch(setUrlFullSizeVideo(null));
  };

  const iframeOnLoad = () => {
    setLoaded(false);
  };

  return (
    <Overlay
      onClick={closeModalVideo}>
      <CloseModalButtonWrapper >
        <CloseModalButton closeModal={closeModalVideo}/>
      </CloseModalButtonWrapper>
      <VideoWrapper data-padding-hidden={loaded}>
        {urlVideo && 
          <iframe 
            src={urlVideo.response.items[0].player} 
            title={urlVideo.response.items[0].id}  
            onLoad={iframeOnLoad} 
            width={urlVideo.response.items[0].width}
            height={urlVideo.response.items[0].height}
            frameBorder="0" 
            allow="autoplay" 
            allowFullScreen></iframe>}
        {loaded && <Preloader />}
      </VideoWrapper>
    </Overlay>
  );
};