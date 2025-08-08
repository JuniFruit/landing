function lessonReviewsImgPaths() {
  const count = 25;
  const result: string[] = [];
  for (let i = 1; i < count; i++) {
    result.push(`/static/images/group_lesson_review_${i}.jpg`);
  }
  return result;
}
export const IMG_LINKS = {
  LOGO: "/static/images/logo.png",
  HERO: "/static/images/hero.jpg",
  HERO_SPLIT: "/static/images/hero_split.jpg",
  PREVIEW: "/static/images/preview.jpg",
  REVIEW_1: "/static/images/review1.jpg",
  REVIEW_2: "/static/images/review2.jpg",
  REVIEW_3: "/static/images/review3.jpg",
  REVIEW_4: "/static/images/review4.jpg",
  GROUP_COURSE_LESSONS_REVIEWS: lessonReviewsImgPaths(),
  GENERAL_COURSE: "/static/images/general_course.png",
  IT_COURSE: "/static/images/it_course.png",
  INTERVIEW_COURSE: "/static/images/interview_course.png",
  INTERVIEW_COURSE_MOBILE: "/static/images/interview_mobile.png",
  GENERAL_COURSE_PREVIEW: "/static/images/general_course_preview.png",
  IT_COURSE_PREVIEW: "/static/images/it_course_preview.png",
  INTERVIEW_PREVIEW: "/static/images/interview_preview.png",
  GROUP_COURSE: "/static/images/italk.png",
};

export const SHARED_LINKS = {
  ENGLISH_LEVEL_TEST: "https://www.efset.org/ru/",
};

export const getIntersectDefaultOpt = (): IntersectionObserverInit => {
  return {
    root: null,
    rootMargin: "0px 0px -150px 0px",
    threshold: 0,
  };
};
