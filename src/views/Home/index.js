import React, { useEffect, useState } from "react";

import { Nav } from "../../components";

import { Landing, Contact, Work, Education } from "../";

import "./styles.css";

const sections = [
  { key: "home", value: "Home", view: <Landing /> },
  { key: "work", value: "Work", view: <Work /> },
  { key: "education", value: "Education", view: <Education /> },
  { key: "contact", value: "Contact me", view: <Contact /> },
];

function Home() {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="background">
      <div className="viewer">
        <Nav
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <section className="viewer__item viewer__content">
          {currentSection.view}
        </section>
      </div>
    </div>
  );
}

export default Home;
