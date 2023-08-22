import { IconButton, NavLink, SocialLink } from "@/ui/buttons/Buttons";
import { FC, MouseEventHandler, useRef } from "react";
import {
  FaFlagUsa,
  FaHome,
  FaIdCard,
  FaKeyboard,
  FaTelegram,
  FaMicrophoneAlt,
} from "react-icons/fa";
import styles from "./Header.module.scss";
import { IoClose, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";

type INav = {
  onClickOutside?: () => void;
};

const Nav: FC<INav> = ({ onClickOutside }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = e => {
    if (e.target !== menuRef.current && !!onClickOutside) return onClickOutside();
  };

  return (
    <div className={styles.nav_container} onClick={handleClick}>
      <div ref={menuRef} className={styles.nav_wrapper}>
        <div className={styles.nav_header}>
          <h2>Меню</h2>
          <IconButton
            onClick={() => (!!onClickOutside ? onClickOutside() : null)}
            title="Закрыть навигацию"
            aria-label="Закрыть навигацию"
          >
            <IoClose />
          </IconButton>
        </div>
        <nav className={styles.nav_links}>
          <ul>
            {navData.map(link => (
              <li key={link.title}>
                <NavLink {...link} key={link.href} />
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
    </div>
  );
};

var navData = [
  { title: "Обо мне", href: "/", icon: FaHome },
  { title: "Общий английский", href: "/courses/general", icon: FaFlagUsa },
  { title: "IT английский", href: "/courses/tech", icon: FaKeyboard },
  { title: "Подготовка к собеседованию", href: "/courses/interview", icon: FaIdCard },
  { title: "Курс ITalk", href: "/courses/group", icon: FaMicrophoneAlt },
];

export const SocialLinks: FC = () => {
  return (
    <ul className={styles.social_links}>
      {socialLinksData.map(link => (
        <li key={link.id}>
          <SocialLink key={link.id} href={link.href}>
            {link.icon({})}
          </SocialLink>
        </li>
      ))}
    </ul>
  );
};

var socialLinksData = [
  {
    href: "https://www.instagram.com/annarus.eng/",
    icon: IoLogoInstagram,
    id: 0,
  },
  {
    href: "https://t.me/annaruseng",
    icon: FaTelegram,
    id: 1,
  },
  {
    href: "https://www.youtube.com/@annarus.ITenglish/featured",
    icon: IoLogoYoutube,
    id: 2,
  },
  {
    href: "https://www.linkedin.com/in/annarusakova/",
    icon: IoLogoLinkedin,
    id: 3,
  },
];

export default Nav;
