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

  @media(max-width: 450px) {
    justify-content: space-around;
  }
`;

const SmallPicturesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 450px) {
    justify-content: space-around;
  }
`;

export const PicturesBlockWrapper = ({ attachments }) => {

  return(
  <BlockWrapper >
    <LargePicturesBlock >
      {attachments.map((item, i) => i < 3 && 
        <FigureImg 
          key={i} 
          serialNumber={i}
          url={item.params.url}
          fullSizeTypeFile={item.type}
          fullSizeTypeName={item.params.fullSizeUrl}
          descr={item.params.descr}
          duration={item.params.duration}
          figureStyle={["margin: 0.4em;"]}
          bgImgStyle={[`width: ${item.params.width}px;`,
                      `height: ${item.params.height}px;`]}
          figcaptionStyle={[`width: ${item.params.width}px;`]}
          ext={item.params.ext}
          width={item.params.width}
        />
      )}
    </LargePicturesBlock>
    {attachments.length > 3 && 
      <SmallPicturesBlock >
        {attachments.map((item, i) => i >= 3 &&
          <FigureImg 
            key={i} 
            serialNumber={i}
            url={item.params.url}
            fullSizeTypeFile={item.type}
            fullSizeTypeName={item.params.fullSizeUrl}
            descr={item.params.descr}
            duration={item.params.duration}
            figureStyle={["margin: 0.4em;"]}
            bgImgStyle={[`width: ${item.params.width}px;`,
                        `height: ${item.params.height}px;`]}
            figcaptionStyle={[`width: ${item.params.width}px;`]}
            ext={item.params.ext}
            width={item.params.width}
          />
        )}
      </SmallPicturesBlock>}
  </BlockWrapper>
)}