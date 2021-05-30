import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFullSizeImg } from '../../reducers/displayingFullSizeContentReduser';
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

const ImgWrapper = styled.div`
  position: relative;
  padding: 1em;
  background-color: rgba(204,204,255,0.7);
  border-radius: 0.5em;

  & img {
    max-height: 90vh;
    position: relative;
  }
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

export const LayoutShowImg = ({ urlImg }) => {
  const dispatch = useDispatch();

  const closeModalImg = () => {
    dispatch(setFullSizeImg(null));
  };

  return (
    <Overlay
      onClick={closeModalImg}>
      <ImgWrapper >
        <PreloaderImg />
        <img src={urlImg} alt="фото"/>
      </ImgWrapper>
    </Overlay>
  );
};
