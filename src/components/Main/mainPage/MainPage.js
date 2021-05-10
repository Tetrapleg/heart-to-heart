
import styled from 'styled-components';
import { MainSlider } from './mainSlider/MainSlider';
import { ContentContainer } from '../../htmlContainer/ContentContainer';
import maricPng from './../../../images/maric.png';

const MainContentWrapper = styled.div`
  text-align: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  font-size: 3vmax;
  padding-bottom: 4em;

  @media(max-width: 1060px) {
    font-size: 4vmax;
  }
`;

const ContentTitleWrapper = styled.div`
`;

const ContentTitle = styled.p`
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: 300;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5), 0 0 0.1em red;
  font-family: 'Marck Script';
`; 

const TitleImg = styled.div`
  width: 2em;
  height: 2em;
  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  display: inline-block;
`;

const MainTitle = styled.h1`
  font-weight: 100;
  line-height: 1.5;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5), 0 0 0.1em red;
  text-align: center;
  font-size: 2vmax;

  @media(max-width: 1060px) {
    font-size: 2.5vmax;
  }
`; 

const ContentDescr = styled.p`
  font-weight: 100;
  line-height: 1.5;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5), 0 0 0.1em red;
  text-align: center;
  font-size: 2vmax;

  @media(max-width: 1060px) {
    font-size: 2.5vmax;
  }
`; 

export const MainPage = () => (
  <>
    <MainSlider />
    <MainContentWrapper >
      <ContentContainer >
        <ContentWrapper >
          <ContentTitleWrapper >
            <ContentTitle>Привет, друг!</ContentTitle>
            <TitleImg img={maricPng}/>
          </ContentTitleWrapper>
          <MainTitle>Рады приветствовать тебя на нашем сайте, посвященном помощи бездомным животным.</MainTitle>
          <ContentDescr>Присоединяйся к нам, твори добро, не оставайся в стороне! Поверь, это несложно, особенно когда ты не один! Чем больше в наших рядах активных и добрых людей, тем больше шансов у животных на счастливую жизнь!</ContentDescr>
        </ContentWrapper>
      </ContentContainer>
    </MainContentWrapper>
  </>
)