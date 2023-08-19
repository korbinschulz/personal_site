import axios from "axios";
const BASE64_ENCODE = process.env.BASE64_ENCODE;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const getToken = async () => {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    {
      headers: {
        Authorization: `Basic ${BASE64_ENCODE}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data;
};

const getTopArtists = async () => {
  const { access_token } = await getToken();
  const response = await axios.get(
    "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=0",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const data = response.data.items.map((artist) => ({
    name: artist.name,
    image: artist.images[0].url,
    url: artist.external_urls.spotify,
  }));

  return data;
};

const getTopTracks = async () => {
  const { access_token } = await getToken();
  const response = await axios.get(
    "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=15&offset=5",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const data = response.data.items.map((track) => ({
    name: track.name,
    artist: track.artists[0].name,
    album: track.album.name,
    img: track.album.images[0].url,
    link: track.external_urls.spotify,
  }));

  return data;
};

const getCurrentSong = async () => {
  const { access_token } = await getToken();
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-cache",
    }
  );

  if (response.isPlaying === false) return null;

  const data = await response.json();

  const currentSong = {
    isPlaying: data.is_playing,
    title: data.item.name,
    album: data.item.album.name,
    artist: data.item.album.artists.map((artist) => artist.name).join(", "),
    albumImage: data.item.album.images[0].url,
    songUrl: data.item.external_urls.spotify,
  };

  return currentSong;
};

export { getTopArtists, getTopTracks, getCurrentSong };
