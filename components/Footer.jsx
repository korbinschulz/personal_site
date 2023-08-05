import style from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={style.footer_outer}>
      <div className={style.footer_inner}>
        <ul className={style.footer_list}>
          <a className={style.footer_link}>github</a>
          <a className={style.footer_link}>instagram</a>
          <a className={style.footer_link}>linkedin</a>
          <a className={style.footer_link}>spotify</a>
          <a className={style.footer_link}>twitter</a>
        </ul>
      </div>
      <div className={style.footer_inner}>
        © 2023 Korbin Schulz. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
