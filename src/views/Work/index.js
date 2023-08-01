import { Fragment } from "react";
import {
  PiAsteriskDuotone,
  PiCalculatorDuotone,
  PiStethoscopeDuotone,
  PiLeafDuotone,
} from "react-icons/pi";

import { List, Title } from "../../components";

const jobs = [
  {
    key: "redradix",
    value: "RedRadix ",
    url: "https://www.redradix.com/",
    category: "Full-stack developer (2022-2023)",
    icon: <PiAsteriskDuotone />,
  },
  {
    key: "uc",
    value: "UNICAN - Master en tributación",
    url: "https://www.tributacion.unican.es/2023/",
    category: "Wordpress developer (2023)",
    icon: <PiCalculatorDuotone />,
  },
  {
    key: "connect-health",
    value: "ConnectHealth ",
    category: "Full-stack developer (2020-2022)",
    url: "https://connecthealth.info/",
    icon: <PiStethoscopeDuotone />,
  },
  {
    key: "diatomea",
    value: "Diatomea",
    url: "https://www.diatomea.tech/",
    category: "Full-stack developer (2018-2020)",
    icon: <PiLeafDuotone />,
  },
];

const Work = () => {
  return (
    <Fragment>
      <Title> My jobs </Title>
      <List items={jobs} />
    </Fragment>
  );
};

export default Work;
