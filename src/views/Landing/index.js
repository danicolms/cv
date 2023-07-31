import React, { Fragment } from "react";

import { Title } from "../../components";

import "./styles.css";

const Landing = () => {
  return (
    <div className="landing__container">
      <Title> Hello! </Title>
      <div className="content__container">
        <p>
          I'm{" "}
          <a
            className="me"
            href="https://danicolms.github.io/portfolio/"
            target="_blank"
          >
            <b>Dani</b>
          </a>
          , a full-stack developer based in Santander, Spain.
        </p>
        <br />
        <p>
          As an adept computer engineer, I have a passion for creating visually
          appealing and user-friendly interfaces. My expertise encompasses a
          wide range of programming languages, frameworks, and tools, enabling
          me to deliver seamless and innovative projects, as my commitment to
          staying updated with the latest industry trends ensures that I
          continuously bring fresh perspectives to my projects.
        </p>
      </div>
    </div>
  );
};

export default Landing;
