import styled from 'styled-components';
import { ContentContainer } from '../../../htmlContainer/ContentContainer';

const Slide = styled.div`
  height: 100%;
  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TintingLayer = styled.div`
  background-color: rgba(0,0,0,0.3);
`;

const SlideContent = styled.div`
  display: flex;
  justify-content: center;
`;

const SlideTitle = styled.h3`
  margin-top: auto;
  font-weight: 300;
  font-size: 2vmax;
  padding-bottom: 1em;
  padding-left: 0.1em;
  color: rgba(255,21,49,0.9);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5), 0 0 0.1em red;
  text-align: center;

  @media(max-width: 1060px) {
    font-size: 2.5vmax;
  }
`;

export const SlideItem = ({ title, img }) => (
  <Slide 
    img={img}
  >
    <TintingLayer >
      <ContentContainer >
        <SlideContent >
          <SlideTitle >{title}</SlideTitle>
        </SlideContent>
      </ContentContainer>
    </TintingLayer>
  </Slide>
);