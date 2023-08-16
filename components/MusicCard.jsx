import style from "../styles/MusicCard.module.css";
import Image from "next/image";

const MusicCard = ({ name, artist, album, img, link }) => {
  const alt = album != null ? `Album art for ${album}` : `Picture of ${name}`;
  return (
    <div className={style.card_outer}>
      <a href={link}>
        <Image
          alt={alt}
          className={style.music_image}
          width={100}
          height={100}
          src={img}
        />
      </a>
      {name != null ? (
        <div className={style.song_label}>
          <span className={style.main_label}>{name}</span>
          <span className={style.sub_label}>{artist}</span>
        </div>
      ) : (
        <div className={style.main_label}>{artist}</div>
      )}
    </div>
  );
};
export default MusicCard;
