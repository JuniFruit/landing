import { FC } from "react";
import styles from "./About.module.scss";
import { Box } from "./AboutBoxes";
import { IoAccessibility } from "react-icons/io5";
const data = [
  {
    title: "",
    description: "",
    icon: IoAccessibility,
    color: "",
  },
];

const About: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Обо мне</h2>
      <div className={styles.boxes}>
        {data.map(item => (
          <Box {...item} />
        ))}
      </div>
    </div>
  );
};

export default About;
