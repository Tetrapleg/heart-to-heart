import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFullSizeVideo } from '../../reducers/displayingFullSizeContentReduser';
import preloaderSvg from './../../images/preloaderSvg.svg';

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

const VideoWrapper = styled.div`
  position: relative;
  padding: 1em;
  background-color: rgba(204,204,255,0.7);
  border-radius: 0.5em;
`;

const PreloaderImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  width: 2em;
  height: 2em;
  z-index: 0;
  background-image: url(${preloaderSvg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  min-width: 5em;
  min-height: 5em;
`;

export const LayoutShowVideo = ({ urlVideo }) => {
  const dispatch = useDispatch();

  const closeModalVideo = () => {
    dispatch(setFullSizeVideo(null));
  };
  console.log(urlVideo);
  return (
    <Overlay
      onClick={closeModalVideo}>
      <VideoWrapper >
        <PreloaderImg />
        <iframe src="https://vk.com/video_ext.php?oid=-124002988&id=456245086&hash=5a1035cf41030680&hd=1" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </VideoWrapper>
    </Overlay>
  );
};

// video_74e237b1a7Z3BhKeamadFt9BO7f6TDkWQISGKRqcpPAY709pZmFdkmoFGZJiCZ0c3kFTtc96CyJ1tL4fHuvFnHQ