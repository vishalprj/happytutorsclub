import React, { useState } from "react";
import "./AboutPage.css";
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const NestedAccordion = () => {
  return (
    <div className="nested-accordion">
      <h1 style={{ textAlign: "center", marginBottom: "4rem" }}>
        Explore your Exam
      </h1>
      <Accordion
        title="Foreign Education"
        content={
          <>
            <Accordion
              title="Test of English"
              content={
                <div className="image-description-box">
                  <img
                    src="https://nationaldemo.edugorilla.org/static/media/wl_client_exam_images/1/deb7aef148d04910b39089421a23e90c.png"
                    alt="img"
                    className="image"
                  />
                  <div className="description">Test of English</div>
                </div>
              }
            />
            <Accordion
              title="International English Language Testing System"
              content={
                <div className="image-description-box">
                  <img
                    src="https://nationaldemo.edugorilla.org/static/media/wl_client_exam_images/1/bc6f688412ea4c95970bd60e1ab3654d.PNG"
                    alt="img"
                    className="image"
                  />
                  <div className="description">Test of English</div>
                </div>
              }
            />
          </>
        }
      />
      <Accordion
        title="Defence & Police "
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Medical "
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Engineering Entrance
"
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Teaching"
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Law, Arts, Commerce "
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Civil Services "
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Management "
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Banking"
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Government Exams "
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="SSC"
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Computer & Information Technology "
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
      <Accordion
        title="Graduate Engineering "
        content={
          <>
            <Accordion
              title="Nested Accordion 3"
              content={<div>This is the content for Nested Accordion 3</div>}
            />
            <Accordion
              title="Nested Accordion 4"
              content={<div>This is the content for Nested Accordion 4</div>}
            />
          </>
        }
      />
    </div>
  );
};

export default NestedAccordion;
