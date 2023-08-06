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
      "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=0",
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

    const data = response.items.map((artist) => ({
      name: artist.name,
      image: artist.images[0].url,
      url: artist.external_urls.spotify,
    }));

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
    //res.status(500).json({ error: "Internal Server Error" });
    return new Response("Internal Server Error", { status: 500 });
  }
};
