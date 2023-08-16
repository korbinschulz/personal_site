import style from "../../styles/Music.module.css";
import { getTopArtists, getTopTracks } from "../lib/spotify";
import MusicCard from "@/components/MusicCard";
import NowPlaying from "@/components/NowPlaying";

export const metadata = {
  title: "Music - Korbin S",
  description: "Korbin S music page",
};

export default async function Music() {
  const artists = await getTopArtists();
  const songs = await getTopTracks();

  return (
    <div className={style.music_outer}>
      <div className={style.music_inner}>
        <section className={style.music_section}>
          <span className={style.main_header}>Music</span>
          <span className={style.main_sub}>
            Check out the songs and artists that I&apos;ve been listening to
            lately.
          </span>
        </section>

        <section className={style.music_section}>
          <span className={style.music_subheader}>
            I&apos;m currently listening to...
          </span>
          <NowPlaying />
        </section>

        <section className={style.music_section}>
          <span className={style.music_subheader}>My Top Artists</span>
          <div className={style.music_content_container}>
            {artists.map((artist) => (
              <MusicCard
                key={artist.url}
                img={artist.image}
                link={artist.url}
                artist={artist.name}
              />
            ))}
          </div>
        </section>

        <section className={style.music_section}>
          <span className={style.music_subheader}>My Top Songs</span>
          <div className={style.music_content_container}>
            {songs.map((song) => (
              <MusicCard
                key={song.link}
                img={song.img}
                link={song.link}
                name={song.name}
                artist={song.artist}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
