import styled from 'styled-components';
import { FigureImg } from './FigureImg';

const BlockWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

const LargePicturesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SmallPicturesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PicturesBlockWrapper = ({ ...props }) => {
  console.log(props);

  return(
  <BlockWrapper >
    <LargePicturesBlock >
      {props.photos.map((item, i) => i < 3 && item.type !== "link" &&
        <FigureImg 
          key={i} 
          url={item.photo?.sizes.find(elem => elem.type === "r" || elem.type === "q").url ||
              item.video.image.find(elem => !elem.with_padding && +elem.width === 320).url}
          fullSizeTypeFile={item.type}
          fullSizeTypeName={item.photo?.sizes.find(elem => elem.type === "z" || elem.type === "x").url ||
                            item.video.track_code}
          descr={item.photo?.text ??
                item.video.title}
          duration={item.video?.duration}
          figureStyle={["margin: 0.4em"]}
          bgImgStyle={[`width: ${item.photo?.sizes.find(elem => elem.type === "r" || elem.type === "q").width ||
                                item.video.image.find(elem => !elem.with_padding && +elem.width === 320).width}px`,
                      `height: ${item.photo?.sizes.find(elem => elem.type === "r" || elem.type === "q").height ||
                                item.video.image.find(elem => !elem.with_padding && +elem.width === 320).height}px`]}
          figcaptionStyle={[`width: ${item.photo?.sizes.find(elem => elem.type === "r" || elem.type === "q").width ||
                                item.video.image.find(elem => !elem.with_padding && +elem.width === 320).width}px`]}
        />
      )}
    </LargePicturesBlock>
    {props.photos.length >3 && 
      <SmallPicturesBlock >
        {props.photos.map((item, i) => i >= 3 &&  item.type !== "link" &&
          <FigureImg 
            key={i} 
            url={item.photo?.sizes.find(elem => elem.type === "p" || elem.type === "o").url ||
                item.video.image.find(elem => +elem.width === 160 || +elem.width === 130).url}
            fullSizeTypeFile={item.type}
            fullSizeTypeName={item.photo?.sizes.find(elem => elem.type === "z" || elem.type === "x").url ||
                              item.video.track_code}
            descr={item.photo?.text ??
                  item.video.title}
            duration={item.video?.duration}
            figureStyle={["margin: 0.4em"]}
            bgImgStyle={[`width: ${item.photo?.sizes.find(elem => elem.type === "p" || elem.type === "o").width ||
                                  item.video.image.find(elem => +elem.width === 160 || +elem.width === 130).width}px`,
                        `height: ${item.photo?.sizes.find(elem => elem.type === "p" || elem.type === "o").height ||
                                  item.video.image.find(elem => +elem.width === 160 || +elem.width === 130).height}px`]}
            figcaptionStyle={[`width: ${item.photo?.sizes.find(elem => elem.type === "p" || elem.type === "o").width ||
                                  item.video.image.find(elem => +elem.width === 160 || +elem.width === 130).width}px`]}
          />
        )}
      </SmallPicturesBlock>}
  </BlockWrapper>
)}