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
          width={30}
          height={30}
          src={img}
        />
      </a>
      {name != null ? (
        <div className={style.song_label}>
          <span>{name}</span>
          <span>{artist}</span>
        </div>
      ) : (
        <div className={style.artist_label}>{artist}</div>
      )}
    </div>
  );
};
export default MusicCard;
