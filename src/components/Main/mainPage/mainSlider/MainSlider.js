import Slider from 'react-slick';
import styled from 'styled-components';
import { SlideItem } from './SlideItem';
import { dbMenu } from './../../../DB';

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  & .slick-arrow {
    background-color: green;
  }
  & .slick-slider {
    height: 100%;
  }
  & .slick-slider .slick-list, 
  & .slick-slider .slick-track {
    height: 100%;
  }
  & div {
    height: 100%;
  }
`;

const SlideInner = styled.div`
  height: 100%;
`;

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: false,
};

export const MainSlider = () => {
  const sliderData = dbMenu.sliders.mainSlider;
  
  return (
    <SliderWrapper >
      <Slider 
        {...settings}
      >
        {sliderData.map((item, i) => {
            return (
              <SlideInner
                key={i}
              >
                <SlideItem 
                  title={item.title}
                  img={item.img}
                />
              </SlideInner>
            )
          })
        }
      </Slider>
    </SliderWrapper>
  )
}

