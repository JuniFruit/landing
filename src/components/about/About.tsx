import { SectionHeading } from "@/ui/typography/Typography";
import { FC } from "react";

import styles from "./About.module.scss";
import { Box } from "./AboutBoxes";
import { data } from "./data";
import { PaddingWrapper } from "@/ui/wrappers/Wrapper";

const About: FC = () => {
  return (
    <PaddingWrapper>
      <div className={styles.container}>
        <div className={styles.capsule}>
          <SectionHeading>Обо мне</SectionHeading>
        </div>
        <div className={styles.boxes}>
          {data.map(item => (
            <Box {...item} key={item.title} />
          ))}
        </div>
      </div>
    </PaddingWrapper>
  );
};

export default About;
