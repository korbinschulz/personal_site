import axios from "axios";

export const GET = async (req, res) => {
  const getToken = async () => {
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      {
        headers: {
          Authorization: `Basic ${process.env.BASE64_ENCODE}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  };

  const getTopArtists = async () => {
    const { access_token } = await getToken();
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=15&offset=5",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return response.data;
  };

  try {
    const response = await getTopArtists();

    const data = response.items.map((track) => ({
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      img: track.album.images[0].url,
      link: track.external_urls.spotify,
    }));

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
