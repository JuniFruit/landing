import { SectionHeading } from "@/ui/typography/Typography";
import { BlockWrapper, PaddingWrapper, Phone } from "@/ui/wrappers/Wrapper";
import { IMG_LINKS } from "@/utils/general";
import { FC } from "react";
import styles from "./Reviews.module.scss";
import { ImgBg } from "@/ui/images/Images";
import { it } from "node:test";
import Image from "next/image";

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
          </div>
        </PaddingWrapper>
      </BlockWrapper>
    </section>
  );
};

export default Reviews;
