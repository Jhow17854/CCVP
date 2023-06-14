import React from 'react';
import { SlideImageWrapper, SlideImage } from './styled';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlide = ({ images }) => {
  return (
    <div style={{
      marginTop: '125px'
    }}>
      <Carousel autoPlay interval={5000} showStatus={false} showThumbs={false} infiniteLoop transitionTime={1000} stopOnHover={false} style={{ margin: '0', maxWidth: '10%' }}>
        {images.map((image, index) => (
          <div key={index}>
            <SlideImageWrapper>
              <SlideImage src={image} alt="Imagem" />
            </SlideImageWrapper>
          </div>
        ))}
      </Carousel>
    </div >
  );
};

export default ImageSlide;
