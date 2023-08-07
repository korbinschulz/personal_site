//"use client";
import style from "../../styles/Music.module.css";
import MusicCard from "@/components/MusicCard";

async function getArtists() {
  try {
    const response = await fetch("http:localhost:3000/api/spotify/top-artists");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

async function getSongs() {
  try {
    const response = await fetch("http:localhost:3000/api/spotify/top-tracks");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

async function getCurrentListening() {
  try {
    const response = await fetch("http:localhost:3000/api/spotify/now-playing");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

const Music = async () => {
  /*const [songs, setSongs] = useState();
  const [artists, setArtists] = useState();
  const [currentListening, setCurrentListening] = useState();

  useEffect(() => {*/

  const artists = await getArtists();
  const songs = await getSongs();
  const currentListening = await getCurrentListening();
  // }, []);

  console.log("ARTISTS HERE ", artists);
  console.log("SONGS HERE ", songs);
  console.log("CURRENT HERE ", currentListening);
  return (
    <div className={style.music_outer}>
      <div className={style.music_inner}>
        <section className={style.music_section}>
          <span className={style.main_header}>Music</span>
          <span className={style.main_sub}>
            Check out the songs and artists that i've been listening to lately.
          </span>
        </section>

        <section className={style.music_section}>
          {currentListening.title != null ? (
            <>
              <span className={style.music_subheader}>
                I'm currently listening to...
              </span>
              <MusicCard
                name={currentListening.title}
                img={currentListening.albumImage}
                artist={currentListening.artist}
                link={currentListening.songUrl}
              />
            </>
          ) : (
            <></>
          )}
        </section>

        <section className={style.music_section}>
          <span className={style.music_subheader}>My Top Artists</span>
          <div className={style.music_content_container}>
            {artists.map((artist) => (
              <MusicCard
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
};

export default Music;
