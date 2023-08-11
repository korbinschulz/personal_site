"use client";
import style from "../styles/MusicCard.module.css";
import Image from "next/image";
import useSWR from "swr";

const NowPlaying = () => {
  const song = useSWR("/api/spotify/now-playing", (url) =>
    fetch(url).then((res) => res.json())
  );

  console.log("SONG HERE ", song.data);

  return (
    <>
      {song.data ? (
        <div>
          <a href={song.data.songUrl}>
            <div className={style.card_outer}>
              <Image
                alt={`Cover art for ${song.album} by ${song.artist}`}
                className={style.music_image}
                width={100}
                height={100}
                src={song.data.albumImage}
              />
              <div className={style.song_label}>
                <span>{song.data.title}</span>
                <span>{song.data.artist}</span>
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
