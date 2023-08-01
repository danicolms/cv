import React, { Fragment } from "react";
import {
  PiAtomDuotone,
  PiGraduationCapDuotone,
  PiGraphDuotone,
  PiTreePalmDuotone,
} from "react-icons/pi";

import { List, Title } from "../../components";

const studies = [
  {
    key: "uneatlantico",
    value: "Computer engineering",
    url: "https://www.uneatlantico.es/escuela-politecnica-superior/estudios-grado-oficial-en-ingenieria-informatica",
    category: "UNEATLANTICO (2016-2020)",
    icon: <PiGraduationCapDuotone />,
  },
  {
    key: "hyperledger",
    value: "Hyperledger Fabric for Developers",
    url: "https://training.linuxfoundation.org/training/hyperledger-fabric-for-developers-lfd272/",
    category: "Linux Foundation (2023)*",
    icon: <PiGraphDuotone />,
  },
  {
    key: "nuclio",
    value: "UX Writing / UX & Gamificación",
    url: "https://nuclio.school",
    category: "Nuclio School (2021)",
    icon: <PiAtomDuotone />,
  },
  {
    key: "cal-arts",
    value: "Fundamentals of Graphic Design",
    url: "https://www.coursera.org/learn/fundamentals-of-graphic-design",
    category: "CalArts (2021)",
    icon: <PiTreePalmDuotone />,
  },
];

const Education = () => {
  return (
    <Fragment>
      <Title> My studies </Title>
      <List items={studies} />
    </Fragment>
  );
};

export default Education;
