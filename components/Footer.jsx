import style from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={style.footer_outer}>
      <div className={style.footer_inner}>
        <ul className={style.footer_list}>
          <a
            className={style.footer_link}
            href="https://github.com/korbinschulz"
          >
            github
          </a>
          <a
            className={style.footer_link}
            href="https://www.instagram.com/korbin.schulz/"
          >
            instagram
          </a>
          <a
            className={style.footer_link}
            href="https://www.linkedin.com/in/korbin-schulz/"
          >
            linkedin
          </a>
          <a
            className={style.footer_link}
            href="https://open.spotify.com/user/korbkris?si=2e5f2b3f37544006"
          >
            spotify
          </a>
          <a className={style.footer_link} href="https://twitter.com/restocc">
            twitter
          </a>
        </ul>
      </div>
      <div className={style.footer_inner}>
        © 2023 Korbin Schulz. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
