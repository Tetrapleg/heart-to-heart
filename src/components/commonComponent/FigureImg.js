import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFullSizeImg, setFullSizePDF, setFullSizeVideo } from '../../reducers/displayingFullSizeContentReduser';
import preloaderSvg from './../../images/preloaderSvg.svg';
import playButton from './../../images/play_button.png';
import { getVideoDuration } from '../functions/getVideoDuration';

const Figure = styled.figure`
  font-size: 1rem;
  background: rgb(204,204,255);
  border-radius: 0.2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.5em;
  cursor: ${({ props }) => props.fullSizeTypeFile === "video" ? "pointer" : "zoom-in"};
  ${({ props }) => props.figureStyle ? props.figureStyle.join(';') : undefined}
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: ${({ props }) => `url(${props.url})`}, url(${preloaderSvg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, 30%;
  background-origin: content-box;
  position: relative;
  ${({ props }) => props.bgImgStyle ? props.bgImgStyle.join(';') : undefined}
`;

const ControlVideo = styled.span`
  position: absolute;
  background: url(${playButton}) center no-repeat;
  background-size: 50%;
  background-position-x: 1em;
  padding: 1em;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 3.5rem;
  height: 3.5rem;
  margin: auto;
  background-color: rgba(0,0,0,0.4);
  border-radius: 50%;
  transition: all .1s;

  &:hover {
    background-color: rgba(0,0,0,0.7);
  }
`;

const DurationVideo = styled.span`
  position: absolute;
  bottom: 1em;
  right: 1em;
  border-radius: 0.2em;
  font-weight: 500;
  color: #fff;
  background-color: rgba(0,0,0,0.4);
  padding: 0.4em 1em;
`;

const ControllSmallSizeVideo = styled.span`
  position: absolute;
  background: url(${playButton}) center no-repeat;
  background-size: 15%;
  background-position-x: 0.4em;
  bottom: 1em;
  right: 1em;
  border-radius: 0.2em;
  font-weight: 500;
  color: #fff;
  background-color: rgba(0,0,0,0.4);
  padding: 0.4em 1em 0.4em 1.8em;
`;

const Figcaption = styled.figcaption`
  margin: 0.5em auto 0;
  font-weight: 500;
  font-size: 1em;
  ${({ props }) => props.figcaptionStyle ? props.figcaptionStyle.join(';') : undefined}
`;

export const FigureImg = ({ ...props }) => {
  const dispatch = useDispatch();
  const typeFile = props.fullSizeTypeFile.toLowerCase();

  const openFullSizeModal = () => {
    if(typeFile === "pdf") {
      const urlPDF = `${props.fullSizeTypeName}_fullsize.pdf`;
      dispatch(setFullSizePDF(urlPDF));
    } else if(typeFile === "photo") {
      dispatch(setFullSizeImg(props.fullSizeTypeName));
    } else if(typeFile === "video") {
      dispatch(setFullSizeVideo(props.fullSizeTypeName));
    }
  };

  return(<Figure 
      onClick={openFullSizeModal}
      props={props}
    >
      <ImgWrapper >
        <BackgroundImage 
          props={props}
        />
        {typeFile === "video" && <>
            {props.key < 3 ? 
              <>
                <ControlVideo />
                <DurationVideo >{getVideoDuration(props.duration)}</DurationVideo>
              </> :
              <>
                <ControllSmallSizeVideo >{getVideoDuration(props.duration)}</ControllSmallSizeVideo>
              </>
            }
        </>}
      </ImgWrapper>
      <Figcaption 
        props={props}
      >{props.descr}</Figcaption>
    </Figure>
  )
};