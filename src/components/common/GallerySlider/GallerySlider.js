import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './gallerySlider.scss';
import slideInfo from './slideInfo';

const GallerySlider = () => (
  <div className="galley-slider__gallery-container">
    <CarouselProvider
      className="galley-slider__wrap"
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider className="galley-slider__container">
        {slideInfo.map((item) => (
          <Slide key={item.slideIndex} index={item.slideIndex}>
            <img
              src={item.image1}
              alt="Cat and dog"
              className="galley-slider__image"
            />
            <img
              src={item.image2}
              alt="Cat and dog"
              className="galley-slider__image"
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack>
        <span className="galley-slider__carousel-button back-positioning" />
      </ButtonBack>
      <ButtonNext>
        <span className="galley-slider__carousel-button next-positioning" />
      </ButtonNext>
    </CarouselProvider>
  </div>
);

export default GallerySlider;
