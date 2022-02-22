import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const SlideBox2 = styled.div`
  background-color: black !important;
  color: white !important;
  width: 100vw !important;
  h2 {
    box-sizing: border-box;
    color: white;
    margin: 1em;
  }
`;

const TlaServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 6000,
  };
  return (
    <Slider {...settings}>
      <SlideBox2>
        <h2>Merchandising</h2>
        <StaticImage
          src="../images/homepage/CanadaGoose-01-1200x800.jpg"
          alt="Selection of merchandising items"
          fit="cover"
        />
      </SlideBox2>
      <SlideBox2>
        <h2>Marketing Collateral</h2>
        <StaticImage
          src="../images/homepage/collateral-1200x800.jpg"
          alt="Selection of marketing materials"
          fit="cover"
        />
      </SlideBox2>
      <SlideBox2>
        <h2>Decorative Graphic Films</h2>
        <StaticImage
          src="../images/homepage/IMG_2282-1200x800.jpg"
          alt="Selection of decorative graphics"
          fit="cover"
        />
      </SlideBox2>
      <SlideBox2>
        <h2>Signage</h2>
        <StaticImage
          src="../images/homepage/signage-1200x800.jpg"
          alt="Selection of signs"
          fit="cover"
        />
      </SlideBox2>
    </Slider>
  );
};

export default TlaServices;
