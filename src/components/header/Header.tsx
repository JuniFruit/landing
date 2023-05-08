import React, { FC, useRef } from "react";
import styles from "./Header.module.scss";
import { IconButton } from "@/ui/buttons/Buttons";
import { IoMenuOutline } from "react-icons/io5";
import { Avatar } from "@/ui/images/Images";
import { IMG_LINKS } from "@/utils/general";
import Link from "next/link";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useDebounce } from "@/hooks/useDebounce";
import Nav from "./Nav";
import { useClickOutside } from "@/hooks/useClickOutside";

const Header: FC = () => {
  const progress = useScrollProgress();
  const debouncedProgress = useDebounce(progress, 50);
  const headerRef = useRef<HTMLElement>(null);
  const getHeight = () => {
    if (!headerRef.current) return 72;

    return headerRef.current.offsetHeight;
  };

  return (
    <>
      {debouncedProgress >= 15 ? (
        <>
          <div style={{ width: "100%", height: `${getHeight()}px` }}></div>
          <header className={styles.sticky_header}>
            <HeaderContents />
          </header>
        </>
      ) : (
        <header ref={headerRef} className={styles.container}>
          <HeaderContents />
        </header>
      )}
    </>
  );
};

function HeaderContents() {
  const { ref, isShow, setIsShow } = useClickOutside(false);

  const handleClick = () => {
    setIsShow(() => !isShow);
  };

  return (
    <>
      <Link
        href="/"
        aria-label="На главную"
        title="На главную"
        onClick={() => window.scrollTo(0, 0)}
      >
        <Avatar imgSrc={IMG_LINKS.AVATAR} aria-label="Анна Русакова" />
      </Link>
      <div ref={ref}>
        <IconButton
          onClick={handleClick}
          title="Открыть навигацию"
          aria-label="открыть навигацию"
          aria-haspopup="true"
        >
          <IoMenuOutline />
        </IconButton>
        {isShow ? <Nav onClickOutside={() => setIsShow(!isShow)} /> : null}
      </div>
    </>
  );
}

export default Header;
