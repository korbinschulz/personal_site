import style from "../styles/MusicCard.module.css";
import Image from "next/image";
import { getCurrentSong } from "@/app/lib/spotify";

const NowPlaying = async () => {
  const song = await getCurrentSong();
  return (
    <>
      {song?.title ? (
        <div>
          <a href={song.songUrl}>
            <div className={style.card_outer}>
              <Image
                alt={`Cover art for ${song.album} by ${song.artist}`}
                className={style.music_image}
                width={100}
                height={100}
                src={song.albumImage}
              />
              <div className={style.song_label}>
                <span>{song.title}</span>
                <span>{song.artist}</span>
              </div>
            </div>
          </a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default NowPlaying;
