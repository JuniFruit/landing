export const IMG_LINKS = {
  AVATAR: "/static/images/avatar.jpg",
  FALLBACK: "/static/images/fallback.png",
  HERO: "/static/images/avatar.jpg",
};

export const getIntersectDefaultOpt = (): IntersectionObserverInit => {
  return {
    root: null,
    rootMargin: "0px 0px -150px 0px",
    threshold: 0,
  };
};
