import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const SlideBox = styled.div`
  background-color: black !important;
  color: white !important;
  /* height: 300px !important; */
  width: 100vw !important;
  position: relative;
  h3 {
    box-sizing: border-box;
    color: red;
    margin: 1em;
  }
  .label {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgb(0 0 0 / 30%);
    color: white;
    padding: 1.5em;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 80%);
    font-family: "Montserrat", sans-serif;
  }
`;

const Carousel = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <Slider {...settings}>
      <SlideBox>
        <StaticImage
          src="../images/homepage/dosequis-04.jpg"
          alt="Dos Equis wall sign"
        />
        <div className="label">Backlit display</div>
      </SlideBox>
      <SlideBox>
        <StaticImage
          src="../images/homepage/beerCart-01-sq.jpg"
          alt="Beer Cart"
        />
        <div className="label">Custom Vinyl Wrap</div>
      </SlideBox>
      <SlideBox>
        <StaticImage src="../images/homepage/DSC_7362.jpg" alt="Car Wrap" />
        <div className="label">Vehicle Vinyl Wrap</div>
      </SlideBox>
      <SlideBox>
        <StaticImage
          src="../images/homepage/Nike-Yorkdale-IMG_7346-sq.jpg"
          alt="Nike Store, Yorkdale - Ontario"
        />
        <div className="label">Storefront Window Graphics</div>
      </SlideBox>
      <SlideBox>
        <StaticImage
          src="../images/homepage/CanadaGoose-01-1200x800-sq.jpg"
          alt="Canada Goose - Henry Poole display"
        />
        <div className="label">Custom Merchandise Display</div>
      </SlideBox>
      <SlideBox>
        <StaticImage
          src="../images/homepage/MerciMonami-shields-sq.jpg"
          alt="Merci Mon Ami - shield and signage"
        />
        <div className="label">Acryllic Shield</div>
      </SlideBox>
      <SlideBox>
        <StaticImage
          src="../images/homepage/tla-presentation14-sq.jpg"
          alt="Frost panels "
        />
        <div className="label">Decorative Frost Vinyl</div>
      </SlideBox>
      <SlideBox>
        <StaticImage
          src="../images/homepage/IMG_6530-sq.jpg"
          alt="Dentistry on 88 - reception logo"
        />
        <div className="label">Reception Logo</div>
      </SlideBox>
      <SlideBox>
        <StaticImage src="../images/homepage/DSC_4045.jpg" alt="Vehicle Wrap" />
        <div className="label">Vehicle Vinyl Wrap</div>
      </SlideBox>
    </Slider>
  );
};

export default Carousel;
