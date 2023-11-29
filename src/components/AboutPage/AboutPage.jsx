import React, { useState } from "react";
import "./AboutPage.css";
import NestedAccordion from "./NestedAccordion";
export const AboutPage = () => {
  return (
    <>
      <div className="popular_exam_container">
        <h1 style={{ textAlign: "center", marginBottom: "4rem" }}>
          Explore your Exam
        </h1>

        <div className="popular_exam">
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client/251995/l2_exam_images/12ec0e0ea4b845b481f988212a546940.png"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>Bihar PSC</p>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client_exam_images/1/afac0eeb51f0412cbbbbc0e0c34a23e2.PNG"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>JEE Main Advanced</p>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client/251995/l2_exam_images/6c67187d72024e05a6a54b1510c396e2.png"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>SSC Junior</p>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client/251995/l2_exam_images/ae610e7c87614006b12c323b0f8572f9.jpg"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>SSC MTS</p>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client_exam_images/1/59b8578054c6452da1ceb8ba6a66d91f.png"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>Java</p>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client_exam_images/1/deb7aef148d04910b39089421a23e90c.png"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>Test of English</p>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client_exam_images/1/1c07abb0e13345558d152388b70b7e16.JPG"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>Rajasthan Police</p>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client_exam_images/1/6f89464c37aa49128eb701214d037289.PNG"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>WBJEE</p>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client_exam_images/1/1de05ee79f434f87943afb1793871175.png"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>Junior Assistant</p>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img
                src="https://nationaldemo.edugorilla.org/static/media/wl_client_exam_images/1/abc47e21826541638cc4297f79e37fe3.png"
                alt="img"
              />
            </div>
            <div className="text-container">
              <p>Amazon</p>
            </div>
          </div>
        </div>
      </div>
      <div className="exam-container">
        <NestedAccordion />
      </div>
    </>
  );
};
