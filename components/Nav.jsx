"use client";
import Link from "next/link";
import style from "../styles/Nav.module.css";
import { IconContext } from "react-icons";
import { PiHouseLight } from "react-icons/pi";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { PiStarLight } from "react-icons/pi";
import { PiMusicNotesLight } from "react-icons/pi";

const Nav = () => {
  return (
    <nav className={style.nav_outer}>
      <div className={style.nav_inner}>
        <Link className={style.nav_link} href="/">
          <span className={style.nav_link_text}>
            <IconContext.Provider value={{ className: style.nav_link_icon }}>
              <PiHouseLight />
            </IconContext.Provider>
            <span className={style.hide}>Home</span>
          </span>
        </Link>
        <Link className={style.nav_link} href="/">
          <span className={style.nav_link_text}>
            <IconContext.Provider value={{ className: style.nav_link_icon }}>
              <PiSuitcaseSimpleLight />
            </IconContext.Provider>
            <span className={style.hide}>Experience</span>
          </span>
        </Link>
        <Link className={style.nav_link} href="/">
          <span className={style.nav_link_text}>
            <IconContext.Provider value={{ className: style.nav_link_icon }}>
              <PiStarLight />
            </IconContext.Provider>
            <span className={style.hide}>Interests</span>
          </span>
        </Link>
        <Link className={style.nav_link} href="/">
          <span className={style.nav_link_text}>
            <IconContext.Provider value={{ className: style.nav_link_icon }}>
              <PiMusicNotesLight />
            </IconContext.Provider>
            <span className={style.hide}>Music</span>
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
