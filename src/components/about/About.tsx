import { SectionHeading } from "@/ui/typography/Typography";
import { FC } from "react";

import styles from "./About.module.scss";
import { Box } from "./AboutBoxes";
import { data } from "./data";

const About: FC = () => {
  return (
    <div className={styles.container}>
      <SectionHeading>Обо мне</SectionHeading>
      <div className={styles.boxes}>
        {data.map(item => (
          <Box {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default About;
