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

  const getNowPlaying = async () => {
    const { access_token } = await getToken();
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return response.data;
  };

  try {
    const response = await getNowPlaying();

    if (response.status == 204 || response.status >= 400) {
      //return res.status(200).json({ isPlaying: false });
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
      });
    }

    const data = {
      isPlaying: response.is_playing,
      title: response.item.name,
      album: response.item.album.name,
      artist: response.item.album.artists
        .map((artist) => artist.name)
        .join(", "),
      albumImage: response.item.album.images[0].url,
      songUrl: response.item.external_urls.spotify,
    };

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
