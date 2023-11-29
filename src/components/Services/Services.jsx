import React, { useEffect, useState } from "react";
import "./Services.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const Services = () => {
  return (
    <>
      <div className="service-container ">
        <h1>Our Services</h1>
        <Carousel
          showArrows={false}
          showThumbs={false}
          emulateTouch={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          showStatus={false}
          showIndicators={true}
          selectedItem={0}
          transitionTime={600}
        >
          <div className="service_1">
            <h1>Product service 1</h1>

            <img
              src="https://nationaldemo.edugorilla.org/static/media/wl_client_images/fefec8ede1724b22a8bdcce6302fa37c.jpg"
              alt="img"
            />
          </div>
          <div className="service_1">
            <h1>Product service 2</h1>

            <img
              src="https://nationaldemo.edugorilla.org/static/media/wl_client_images/7965e6ad1120402abec6e5c1ba286665.jpg"
              alt="img"
            />
          </div>
          <div className="service_1">
            <h1>Product service 3</h1>

            <img
              src="https://nationaldemo.edugorilla.org/static/media/wl_client_images/7c7f48dc20c94e4bb0b2680cd33f036e.jpg"
              alt="img"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};
