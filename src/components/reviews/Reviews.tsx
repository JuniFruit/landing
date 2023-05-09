import { SectionHeading } from "@/ui/typography/Typography";
import { BlockWrapper, PaddingWrapper, Phone } from "@/ui/wrappers/Wrapper";
import { IMG_LINKS } from "@/utils/general";
import Image from "next/image";
import { FC } from "react";
import styles from "./Reviews.module.scss";

const reviewsData = [
  { imgSrc: IMG_LINKS.REVIEW_1 },
  { imgSrc: IMG_LINKS.REVIEW_2 },
  { imgSrc: IMG_LINKS.REVIEW_3 },
  { imgSrc: IMG_LINKS.REVIEW_4 },
];

const Reviews: FC = () => {
  return (
    <section>
      <BlockWrapper className={styles.wrapper}>
        <PaddingWrapper>
          <div className={styles.review_container}>
            <div className={styles.review_heading}>
              <h6>Результат работы учителя - его ученики</h6>
              <SectionHeading>Мнение Учеников</SectionHeading>
              <h3>
                которому можно <span>доверять</span>
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <Phone>
              <div className={styles.review_images}>
                {reviewsData.map(item => (
                  <div className={styles.review_img_box}>
                    <Image src={item.imgSrc} width={280} height={300} alt="Отзыв ученика" />
                  </div>
                ))}
              </div>
            </Phone>
            <div className={styles.bg_svg_container}>
              <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <defs>
                  {" "}
                  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    {" "}
                    <stop id="stop1" stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>{" "}
                    <stop id="stop2" stopColor="rgba(0, 0, 0, 1)" offset="100%"></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <path
                  fill="none"
                  d="M12,-17.1C15,-16.7,16.8,-12.5,20.8,-8.2C24.8,-3.8,31,0.8,31.8,5.5C32.5,10.2,27.8,15.1,22,15.7C16.2,16.3,9.4,12.7,5.1,11.1C0.8,9.4,-1.1,9.7,-6.9,12.8C-12.7,16,-22.6,22,-25.4,20.8C-28.3,19.7,-24.2,11.3,-20.6,5.8C-17,0.3,-13.8,-2.3,-13.6,-7.6C-13.3,-12.9,-15.9,-20.9,-14.2,-21.9C-12.4,-23,-6.2,-17.1,-0.9,-15.7C4.4,-14.4,8.9,-17.6,12,-17.1Z"
                  width="100%"
                  height="100%"
                  transform="translate(50 50)"
                  strokeWidth="1"
                  stroke="url(#sw-gradient)"
                ></path>{" "}
              </svg>
            </div>
          </div>
        </PaddingWrapper>
      </BlockWrapper>
    </section>
  );
};

export default Reviews;
