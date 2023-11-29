import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomePage.css";
export const HomePage = () => {
  return (
    <>
      <Carousel
        className="carousel"
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
        <div>
          <img
            src="https://nationaldemo.edugorilla.org/static/media/wl_client/254200/offer_images/090e8b00f6d2401ba6d392a31fd12366.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://nationaldemo.edugorilla.org/static/media/wl_client/254200/offer_images/b96c5e4dac6f4baf89f68c3272715a2e.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://nationaldemo.edugorilla.org/static/media/wl_client/254200/offer_images/1ff9a7edf89141a7a655d8afc61a20d9.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://nationaldemo.edugorilla.org/static/media/wl_client/254200/offer_images/487ed470240b4e098653ee8c9e1293f5.jpg"
            alt="img"
          />
        </div>
        <div>
          <img
            src="https://nationaldemo.edugorilla.org/static/media/wl_client/254200/offer_images/e8fd515d7baf429dbb595e3fb091cd8a.jpg"
            alt="img"
          />
        </div>
      </Carousel>
      <div className="test">
        <h1>YOUR TITLE HERE</h1>
        <div className="test-info">
          <div>Perform</div>
          <div className="vertical_line"></div>
          <div>Analyse</div>
          <div className="vertical_line"></div>
          <div>Improve</div>
        </div>
      </div>
      <div className="test_counter">
        <div className="test-counter_info">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSocAAY5Bj9WHrT86lK5aNgPk3rNeN51QpCzTliKUheTburUhQu"
            alt=""
          />
          <p className="text_count">20,057</p>
          <p style={{ fontSize: "18px" }}>Users</p>
        </div>
        <div className="vertical_line"></div>
        <div className="test-counter_info">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSocAAY5Bj9WHrT86lK5aNgPk3rNeN51QpCzTliKUheTburUhQu"
            alt=""
          />
          <p className="text_count">4 Lakh+</p>
          <p>Questions Attempted</p>
        </div>
        <div className="vertical_line"></div>
        <div className="test-counter_info">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSocAAY5Bj9WHrT86lK5aNgPk3rNeN51QpCzTliKUheTburUhQu"
            alt=""
          />
          <p className="text_count"> 1,516</p>
          <p>Exams</p>
        </div>
        <div className="vertical_line"></div>
        <div className="test-counter_info">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSocAAY5Bj9WHrT86lK5aNgPk3rNeN51QpCzTliKUheTburUhQu"
            alt=""
          />
          <p className="text_count">1</p>
          <p>E-Books</p>
        </div>
      </div>
      <div className="feature">
        <div className="overlay"></div>
        <h1 className="text">We have it all covered</h1>
        <div className="box-container">
          <div className="box-container-1">
            <div>
              <img
                className="icon"
                src="https://nationaldemo.edugorilla.org/static/images/mobile_homepage/current-affairs-gradient-eg.svg"
                alt=""
              />
            </div>
            <p className="feature-info">Current Affairs</p>
            <p className="feature-desc">
              Brief Updates on all the recent happenings
            </p>
          </div>
          <div className="box-container-1">
            <div>
              <img
                className="icon"
                src="https://nationaldemo.edugorilla.org/static/images/mobile_homepage/current-affairs-gradient-eg.svg"
                alt=""
              />
            </div>
            <p className="feature-info">Explore Test Series</p>
            <p className="feature-desc">The best preparation for your exam</p>
          </div>
          <div className="box-container-1">
            <div>
              <img
                className="icon"
                src="https://nationaldemo.edugorilla.org/static/images/mobile_homepage/current-affairs-gradient-eg.svg"
                alt=""
              />
            </div>
            <p className="feature-info">Daily News</p>
            <p className="feature-desc">
              Daily nuggets of news for you to ponder on
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
