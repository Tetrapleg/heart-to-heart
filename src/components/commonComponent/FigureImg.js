import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFullSizeImg, setFullSizePDF, setFullSizeVideo } from '../../reducers/displayingFullSizeContentReducer';
import preloaderSvg from './../../images/preloaderSvg.svg';
import playButton from './../../images/play_button.png';
import { getVideoDuration } from '../functions/getVideoDuration';
import { LinkHref } from './CustomLinks';

const Figure = styled.figure`
  font-size: 1rem;
  background: rgb(204,204,255);
  border-radius: 0.2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ props }) => props.width < 110 ? 0.3 : 0.5}em;
  height: fit-content;
  cursor: ${({ props }) => props.fullSizeTypeFile === "video" ? "pointer" : "zoom-in"};
  ${({ props }) => props.figureStyle ? props.figureStyle.join(';') : undefined}

  /* @media(max-width: 450px) {
    padding: 0;
    margin: 0;
  } */
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
  /* max-width: ${document.documentElement.clientWidth - 65}px; */
  ${({ props }) => props.bgImgStyle ? props.bgImgStyle.join(';') : undefined}
`;

const PdfInner = styled.div`
  background-image: url(${preloaderSvg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;
  background-origin: content-box;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
  bottom: ${({ ...props }) => props.maxSmallSize ? 0 : "1em"};
  right: ${({ ...props }) => props.maxSmallSize ? 0 : "1em"};
  border-radius: 0.2em;
  font-weight: 500;
  color: #fff;
  background-color: rgba(0,0,0,0.4);
  padding: 0.4em 1em 0.4em 1.8em;
`;

const Figcaption = styled.figcaption`
  margin: 0.5em auto 0;
  font-weight: 500;
  font-size: 0.9em;
  word-wrap: break-word;
  max-width: ${document.documentElement.clientWidth - 65}px;
  ${({ props }) => props.figcaptionStyle ? props.figcaptionStyle.join(';') : undefined}
`;

export const FigureImg = ({ ...props }) => {
  const dispatch = useDispatch();
  const typeFile = props.fullSizeTypeFile.toLowerCase();

  const openFullSizeModal = () => {
    if(typeFile === "pdf") {
      const urlPDF = `${props.fullSizeTypeName}_fullsize.pdf`;
      dispatch(setFullSizePDF(urlPDF));
    } else if(typeFile === "photo" || typeFile === "doc") {
      dispatch(setFullSizeImg({
                              fullSizeTypeName: props.fullSizeTypeName,
                              ext: props.ext ? props.ext : null,
                            })
              );
    } else if(typeFile === "video") {
      dispatch(setFullSizeVideo(props.fullSizeTypeName));
    }
  };
//  console.log(props);
  return(<Figure 
      onClick={openFullSizeModal}
      props={props}
    >
      <ImgWrapper >
        {props.ext ? 
          props.ext === "pdf" ? <PdfInner  
              props={props}
            >
              <iframe 
              src={props.url}
              title="pdf"
              width={props.width}
              height={props.height}
              frameBorder="0" 
              allowFullScreen></iframe>
            </PdfInner> :
            <LinkHref href={props.url} target="_blank" rel="noreferrer">Ссылка</LinkHref>
           :
          <BackgroundImage 
            props={props}
          />
        }
        {typeFile === "video" && <>
            {props.width > 200 ? 
              <>
                <ControlVideo />
                <DurationVideo >{getVideoDuration(props.duration)}</DurationVideo>
              </> :
              <>
                <ControllSmallSizeVideo 
                  maxSmallSize={props.width < 110}
                >{getVideoDuration(props.duration)}</ControllSmallSizeVideo>
              </>
            }
        </>}
      </ImgWrapper>
      {props.descr !== "" && <Figcaption 
        props={props}
      >{props.descr}</Figcaption>}
    </Figure>
  )
};