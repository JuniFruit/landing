export const IMG_LINKS = {
  AVATAR: "/static/images/avatar.jpg",
  FALLBACK: "/static/images/fallback.png",
  HERO: "/static/images/hero.jpg",
  REVIEW_1: "/static/images/review1.jpg",
  REVIEW_2: "/static/images/review2.jpg",
  REVIEW_3: "/static/images/review3.jpg",
  REVIEW_4: "/static/images/review4.jpg",
};

export const getIntersectDefaultOpt = (): IntersectionObserverInit => {
  return {
    root: null,
    rootMargin: "0px 0px -150px 0px",
    threshold: 0,
  };
};
